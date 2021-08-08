---
title: manjaro 安装教程
mathjax: false
toc: true
tags:
  - Linux
  - Manjaro
categories:
  - Linux
abbrlink: 7a80b7df
date: 2021-02-16 14:53:47
---



> 参考 https://zhuanlan.zhihu.com/p/114296129

## 1 安装和挂载：

- /boot/efi 挂载到公共的的/efi分区 保留数据
- swap 分区 linux交换区
- / 	/ext4 

<!-- more -->

## 1.1 挂载ntfs

参考：https://www.cnblogs.com/suge-0620/p/13587224.html

https://wiki.archlinux.org/index.php/NTFS-3G

- 安装ntfs-3g

```
sudo pacman -S ntfs-3g
```

- 查看哪个是ntfs分区

```
sudo /sbin/fdisk -l
```

- 编辑`/etc/fstab`,添加如下内容

  ```
  /dev/NTFS-partition  /mnt/windows  ntfs-3g   uid=userid,gid=groupid    0       0
  ```

- 注意当windows没有正常关闭时，可能无法进行写挂载，只能只读

## 2 换源

启动terminal，输入：

```bash
sudo pacman-mirrors -i -c China -m rank
```

在弹出的框中选一个最快的源，一个就好，选多了会降低速度

**6.9更新，不建议使用archlinuxcn的源，因为并不一定兼容**（而且已经有人遇到了问题

如果真的需要用（比如想安装mysql简单点），执行：

```text
sudo nano /etc/pacman.conf
```

在末尾输入：

```text
[archlinuxcn]
Server = http://mirrors.163.com/archlinux-cn/$arch
```

保存退出（Ctrl+X 输入y）接着更新系统

```bash
sudo pacman -Syyu
```

系统更新完毕

如果上一步添加了archlinuxcn的源：

```text
sudo pacman -S archlinuxcn-keyring
```



## 3 安装软件

### 3.1 安装vim

### 3.2 安装yay

Manjaro背靠Arch软件仓库，安装软件爽的yp，仓库又全又新，基本上遇不到依赖问题需要手动去搜该怎么安装，这也是我不愿意换回Ubuntu的一个重要原因

```bash
sudo pacman -S yay
```

yay是一个用Go语言写的一个AUR助手，有些时候官方仓库没有你想要的软件，就需要通过yay来安装

有了yay，以后就不用sudo pacman了

### 3.3 安装输入法

#### 3.3.1 安装fcitx5（输入法框架）

```
yay -S fcitx5-im
```

​	配置fcitx5的环境变量：

```text
nano ~/.pam_environment
```

​	内容为：

```text
INPUT_METHOD  DEFAULT=fcitx5
GTK_IM_MODULE DEFAULT=fcitx5
QT_IM_MODULE  DEFAULT=fcitx5
XMODIFIERS    DEFAULT=\@im=fcitx5
```

#### 3.3.2 安装fcitx5-rime（输入法引擎）

```text
yay -S fcitx5-rime
```

#### 3.3.3 安装rime-double-pinyin

```
yay -S rime-double-pinyin
```

完成之后就可以注销，重新登录之后打开fcitx5-configtool添加rime输入法

#### 3.3.4 配置rime

添加rime输入法后重启fcitx5,会自动生成rime用户配置文件夹，如果想初始化，可以将该文件夹删除后重启rime,会重新自动生成

默认rime用户配置文件夹:

```
~/.local/share/fcitx5/rime/
```

- 新建默认全局配置文件

  ```
  ~/.local/share/fcitx5/rime/default.custom.yaml
  ```

  添加如下內容

```
# default.custom.yaml
# encoding: utf-8

patch:
  switcher:
    caption: 〔方案选单〕
    hotkeys:
    - Control+grave

  # 候选词 5 个
  menu:
    page_size: 5

  schema_list:
    - schema: double_pinyin_flypy  # 小鶴雙拼
    - schema: luna_pinyin_simp     # 朙月拼音·简化字，可以按 ctrl+` 选择临时启用正體中文

  ascii_composer:
    good_old_caps_lock: true
    switch_key:
      Shift_L: commit_code
      Shift_R: commit_code
      Control_L: noop
      Control_R: noop
      Caps_Lock: noop
      Eisu_toggle: clear

  # 默认标点符号
  # (如果不灵，则 把 luna_pinyin_simp.custom.yaml 里的 punctuator 部分注释掉 )
  punctuator:
    half_shape:
    # 列出和 英文标点 不同的 标点 (即打中文时需要 "特别改" 的标点)
    # 常用标点: 冒号 分号 顿号 名字分词号 逗号 句号 问号 感叹号 钱号 破折号 省略号
    # 成对标点: 双引号 单引号 书名号 括号

      # 常用标点
      ':' : '：'
      ';' : '；'
      '\' : '、'
      '/' : '/'
      '|' : '·'
      ',' : '，'
      '.' : '。'
      '?' : '？'
      '!' : '！'
      '$' : '￥'
      '_' : '——'
      '^' : '……'

      # 成对标点
      '''' : { pair: [ '‘', '’' ] }
      '"' : { pair: [ '“', '”' ] }
      '<' : '《'
      '>' : '》'
      '[' : '【'
      ']' : '】'
      #'(' : '（'
      #')' : '）'

#     其他标点样式参考。用它们替换上面的配置即可
#     更多参见 ori_default.yaml
#     '<' : [ 《, 〈, «, ‹ ]
#     '>' : [ 》, 〉, », › ]
#     '''' : { pair: [ '‘', '’' ] }
#     '"' : { pair: [ '“', '”' ] }
#     '/': ['/', '÷']
#     '\' : [ 、, '\', ＼ ]
#     '|' : [ ·, '|', ｜, '§', '¦' ]
#     '~' : [ '~', ～ ]
#     '%' : [ '%', ％, '°', '℃' ]
#     '$' : [ ￥, '$', '€', '£', '¥', '¢', '¤' ]
#     '*' : [ '*', ＊, ·, ・, ×, ※, ❂ ]
#     '[' : [ 「, 【, 〔, ［ ]
#     ']' : [ 」, 】, 〕,  ］ ]
#     '{' : [ 『, 〖, ｛ ]
#     '}' : [ 』, 〗, ｝ ]

  key_binder:
    bindings:
      #
      # 快捷键，更多参见 ori_default.yaml
      #
      - { when: always, accept: Shift+space, toggle: full_shape } # Shift+space 切换全角/半角
      - { when: has_menu, accept: minus, send: Page_Up }
      - { when: has_menu, accept: equal, send: Page_Down }
      #
      # paging
      #
       - { when: has_menu, accept: comma, send: Page_Up }
       - { when: has_menu, accept: period, send: Page_Down }
      #
      # more technical binding
      #
      # Emacs style
      # - { when: composing, accept: Control+p, send: Up }
      # - { when: composing, accept: Control+n, send: Down }
      # - { when: composing, accept: Control+b, send: Left }
      # - { when: composing, accept: Control+f, send: Right }
      # - { when: composing, accept: Control+a, send: Home }
      # - { when: composing, accept: Control+e, send: End }
      # - { when: composing, accept: Control+d, send: Delete }
      # - { when: composing, accept: Control+k, send: Shift+Delete }
      # - { when: composing, accept: Control+h, send: BackSpace }
      # - { when: composing, accept: Control+g, send: Escape }
      # - { when: composing, accept: Control+bracketleft, send: Escape }
      # - { when: composing, accept: Alt+v, send: Page_Up }
      # - { when: composing, accept: Control+v, send: Page_Down }
      # paging keys
      # - { when: composing, accept: ISO_Left_Tab, send: Page_Up }
      # - { when: composing, accept: Shift+Tab, send: Page_Up }
      # - { when: composing, accept: Tab, send: Page_Down }
      # - { when: has_menu, accept: minus, send: Page_Up }
      # - { when: has_menu, accept: equal, send: Page_Down }
      # - { when: paging, accept: comma, send: Page_Up }
      # - { when: has_menu, accept: period, send: Page_Down }
      # hotkey switch
      # - { when: always, accept: Control+Shift+1, select: .next }
      # - { when: always, accept: Control+Shift+2, toggle: ascii_mode }
      # - { when: always, accept: Control+Shift+3, toggle: full_shape }
      # - { when: always, accept: Control+Shift+4, toggle: simplification }
      # - { when: always, accept: Control+Shift+5, toggle: extended_charset }
      # - { when: always, accept: Control+Shift+exclam, select: .next }
      # - { when: always, accept: Control+Shift+at, toggle: ascii_mode }
      # - { when: always, accept: Control+Shift+numbersign, toggle: full_shape }
      # - { when: always, accept: Control+Shift+dollar, toggle: simplification }
      # - { when: always, accept: Control+Shift+percent, toggle: extended_charset }
      # - { when: always, accept: Shift+space, toggle: full_shape }
      # - { when: always, accept: Control+period, toggle: ascii_punct }

```

- 配置小鹤双拼，默认简体,新建double_pinyin_flypy.custom.yaml

  ```
  vim ~/.local/share/fcitx5/rime/double_pinyin_flypy.custom.yaml
  ```

  添加如下內容

```
patch:
  switches:                   # 注意縮進
    - name: ascii_mode
      reset: 0                # reset 0 的作用是當從其他輸入方案切換到本方案時，
      states: [ 中文, 西文 ]  # 重設爲指定的狀態，而不保留在前一個方案中設定的狀態。
    - name: full_shape        # 選擇輸入方案後通常需要立即輸入中文，故重設 ascii_mode = 0；
      states: [ 半角, 全角 ]  # 而全／半角則可沿用之前方案中的用法。
    - name: simplification
      reset: 1                # 增加這一行：默認啓用「繁→簡」轉換。
      states: [ 漢字, 汉字 ]
      
  # 載入朙月拼音擴充詞庫
  "translator/dictionary": luna_pinyin.extended #如果没有该文件开启时会报错，可以临时新建一个空文件luna_pinyin.extended.dict.yaml，或者先关闭，配置好词库后打开

 # 输入双拼码的时候不转化为全拼码
  #translator/preedit_format: {}

 #载入custom_phrase自定义短语
  engine/translators:

    - punct_translator
    - reverse_lookup_translator
    - script_translator
    - table_translator@custom_phrase #表示调用 custom_phrase段编码
    - table_translator

  custom_phrase:
    dictionary: ""
    user_dict: custom_phrase
    db_class: stabledb
    enable_completion: false
    enable_sentence: false
    initial_quality: 1

  #  符号快速输入和部分符号的快速上屏
  punctuator:
    import_preset: symbols
    half_shape:
#      "#": "#"
      '`': ["·","`"]
#      "~": "~"
#      "@": "@"
#      "=": "="
#      "!": "!"
#      "/": ["/", "÷"]
      '\': "、"
#      "'": {pair: ["「", "」"]}
#      "[": ["【", "["]
#      "]": ["】", "]"]
#      "$": ["¥", "$", "€", "£", "¢", "¤"]
#      "<": ["《", "〈", "«", "<"]
#      ">": ["》", "〉", "»", ">"]
```

如果報錯，查看vim /tmp/rime.fcitx-rime.ERROR

#### 3.3.5 添加词库

- 配置自定义词库

  新建custom_phrase.txt文件，添加如下内容

  ```
  # Rime table
  # coding: utf-8
  #@/db_name  custom_phrase.txt
  #@/db_type	tabledb
  #
  # 用於【朙月拼音】系列輸入方案
  # 【小狼毫】0.9.21 以上
  #
  # 請將該文件以UTF-8編碼保存爲
  # Rime用戶文件夾/custom_phrase.txt
  #
  # 碼表各字段以製表符（Tab）分隔
  # 順序爲：文字、編碼、權重（決定重碼的次序、可選）
  #
  # 雖然文本碼表編輯較爲方便，但不適合導入大量條目
  #
  # no comment
  
  中州韻輸入法引擎	rime	2
  又双叒叕	yyy
  http://rime.im/	rime	1
  Rime	rime	3
  ⌘	cmd
  ⌃	ctl
  ⌥	opt
  ⇧	shift
  GBK	gbk
  UTF-8	utfba
  macOS High Sierra	macos	2
  macOS Mojave	macos	3
  macOS	macos	4
  macOS Sierra	macos	1
  Google Analytics	ga
  CSS	css
  HTML html
  iOS	ios
  iPad	ipad
  iPhone	iphone
  iTunes	itunes
  JavaScript	js
  jQuery	jquery
  MySQL	mysql
  SQL	sql
  Objective-C	ojbc
  Ruby	ruby
  Rust	rust
  WeChat	wechat
  Swift	swift
  MacBook Pro	mbp
  MacBook	macbook
  Apple	apple
  U 盘	upj
  GitHub	github
  iMac	imac
  iPad	ipad
  iPad Air	ipad
  iPad mini	ipad
  iPad Pro	ipad
  iPhone X	iphonex
  iPod	ipod
  IPTV	iptv
  IPv4	ipv
  IPv6	ipv
  Mac App Store	mas
  Mac mini	macmini
  Mac Pro	macpro
  OS X	osx
  X-Ray	xray
  Xbox One	xbox
  Youku	youku
  YouTube	youtube
  ```

- 导入基础词库

  参考：https://sspai.com/post/55699

  词库配置文件luna_pinyin.extended.dict.yaml




参考：

  https://zhuanlan.zhihu.com/p/287774005

https://sspai.com/post/55699

https://blog.dwx.io/my-rime/#rime

https://github.com/rime/home/wiki/CustomizationGuide

#### 3.3.6 配置主题

https://github.com/hosxy/Fcitx5-Material-Color

```text
yay -S fcitx5-material-color
```

然后新建配置文件 `~/.config/fcitx5/conf/classicui.conf`：

```
# 垂直候选列表
Vertical Candidate List=False

# 按屏幕 DPI 使用
PerScreenDPI=True

# Font (设置成你喜欢的字体)
Font="思源黑体 CN Medium 13"

# 主题
Theme=Material-Color-Pink
```

有以下主题:

```
Material-Color-Pink
Material-Color-Blue
Material-Color-Brown
Material-Color-DeepPurple
Material-Color-Indigo
Material-Color-Red
Material-Color-Teal
Material-Color-Black
Material-Color-Orange
Material-Color-SakuraPink

```

- 单行模式 

  要使用单行模式，

  - 对于 fcitx5 自带的 pinyin，请修改 `~/.config/fcitx5/conf/pinyin.conf`
  - 对于 fcitx5-rime，请新建/修改 `~/.config/fcitx5/conf/rime.conf`

  加入/修改以下内容：

  ```
  # 可用时在应用程序中显示预编辑文本
  PreeditInApplication=True
  ```

  **注意**：修改配置文件 `~/.config/fcitx5/profile` 时，请务必退出 fcitx5 输入法，否则会因为输入法退出时会覆盖配置文件导致之前的修改被覆盖；修改其他配置文件可以不用退出 fcitx5 输入法，重启生效。

### 3.4 配置ohmyzsh

首先说一下这个过程不需要使用pacman/yay安装软件，因此可以和安装软件并发进行

- 修改默认shell为zsh

  ```bash
  chsh -s /usr/bin/zsh
  ```

- 安装ohmyzsh

  ```text
  wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh
  ```

  - 如果每次执行都失败提示被拒绝连接就先改一下hosts文件

  ```bash
  sudo vim /etc/hosts
  ```

  ​		把这段话复制到下面	

      ```text
      # GitHub Start
      151.101.76.133 raw.githubusercontent.com
      # GitHub End
      ```

  - 替换zsh的配置文件为oh-my-zsh

  ```
  cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
  ```

  - 更改主题

  ```
  vim ~/.zshrc
  找到ZSH_THEME=更改为
  ZSH_THEME="agnoster"
  ```

  

- 安装zsh-syntax-highlighting：提供命令高亮

```text
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

- 安装autosuggestions：记住你之前使用过的命令

```text
git clone git://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions
```

- 安装incr：再也不用先ls在粘贴文件名了

  ```
  git clone git://github.com/makeitjoe/incr.zsh $ZSH_CUSTOM/plugins/incr
  ```

- 安装thefuck：帮你更加高效地学习linux命令

  ```
  pip install --user thefuck
  ```

  输错命令后可以输入fuck,查看正确命令

  - 如果下载太慢：

    ```text
    mkdir ~/.pip
    nano ~/.pip/pip.conf
    ```

  - 写入如下内容,来永久地修改了用户级别的pip下载源

    ```
    [global]
    index-url = https://pypi.tuna.tsinghua.edu.cn/simple
    [install]
    trusted-host=mirrors.aliyun.com
    ```

  - 如果安装失败则用

    ```
    yay -S thefuck
    ```

- 启用插件

  - 在`~/.zshrc`中找到```plugins={git}```,添加如下：

  ```
   plugins=(                                                                           
   79     git
   80     zsh-syntax-highlighting
   81     zsh-autosuggestions
   82     incr
   83     extract
   84 )
  ```

  这个sudo是ohmyzsh自带的插件，功能是在你输入的命令的开头添加sudo ，方法是双击Esc

  extract也是自带插件，不用再去记不同文件的解压命令，方法是extract +你要解压的文件名

  - 最后一行添加

    ```
    eval $(thefuck --alias)
    ```

  - 保存退出之后，手动修改konsole的默认bash为zsh：（右键Konsole -> 编辑当前方案）

  - ```source ~/.zshrc```

### 3.5 安装字体

安装nerd字体

https://github.com/ryanoasis/nerd-fonts/releases

解压下载完的字体压缩包，假设目录名是JetBrainsMono

```
sudo cp -vr JetBrainsMono/ /usr/share/fonts
fc-cache -vf
```

再开一个konsole，手动把字体改成JetBrainsMono Nerd Font即可

同理，安装微软雅黑，将全局设置为微软雅黑

### 3.6 安装Vimplus（现代化的vim插件管理工具）

```
git clone https://github.com/chxuan/vimplus.git ~/.vimplus
cd ~/.vimplus
./install.sh
```

同样想显示icon，需要将终端字体改为打了nerd补丁的字体

### 3.7 typora

```
yay -S typora
```

### 3.8 flameshot

```
yay -S flameshot
```

设置 -> 快捷键 -> 自定义快捷键 -> 编辑 -> 新建 -> 全局快捷键 -> 命令/URL

设置触发器：设置为你习惯的快捷键 -> 动作：命令/URL这填：/usr/bin/flameshot gui

### 3.9 chrome

```text
yay -S google-chrome
```

### 3.10 goldendict

timeshift

```text
yay -S baidunetdisk
```

```text
yay -S netease-cloud-music
```

