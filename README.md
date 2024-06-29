# mydotfile

## zsh(Linux 流编辑)
```bash
sudo dnf install zsh
ZSH_CUSTOM="${ZSH:-$HOME/.oh-my-zsh}/custom"
git clone https://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions && \
git clone https://github.com/zsh-users/zsh-completions $ZSH_CUSTOM/plugins/zsh-completions && \
git clone https://github.com/zsh-users/zsh-syntax-highlighting $ZSH_CUSTOM/plugins/zsh-syntax-highlighting

sed -i '/^plugins=(/ s/)$/ zsh-autosuggestions zsh-completions zsh-syntax-highlighting)/' ~/.zshrc
source ~/.zshrc
```

## starship
```bash
cargo install starship

echo 'eval "$(starship init zsh)"' >> ~/.zshrc
source ~/.zshrc

cat > ~/.config/starship.toml <<EOF
"$schema" = 'https://starship.rs/config-schema.json'
add_newline = true
[character]
success_symbol = '➜'
[package]
disabled = true
EOF
```

## kitty
```bash
cat > ~/.config/kitty/kitty.conf <<EOF
font_size 15.0
background_opacity 0.7
window_padding_width 10

# 使Kitty窗口无标题&边框
hide_window_decorations titlebar-only

# Kitty在最后一个窗口退出后，app也会退出
macos_quit_when_last_window_closed yes

# 可选，在窗口关闭时不提示是否关闭提示
confirm_os_window_close 0

# 可选，记住之前的窗口的位置
remember_window_size = yes
EOF
```

## astronvim
```bash
git clone https://github.com/Mieluoxxx/astronvim_config ~/.config/nvim
nvim --headless -c 'quitall'
```

## Typora
[Typora Themes forest](https://github.com/sylviaxgj/typora-forest-theme/archive/refs/tags/v0.1.8.zip)



