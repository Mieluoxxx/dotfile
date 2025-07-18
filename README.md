# dotfile

## claude code命令使用指南
```markdown
/c-ask: <技术问题> - 系统架构咨询，提供高级设计和战略指导
/c-spec: <功能名称> - 需求收集、设计文档创建和实现计划制定
/c-code: <功能描述> - 代码生成和实现
/c-test: <组件或功能> - 测试策略制定和测试代码生成
/c-review: <代码范围> - 代码质量审查，包括安全性、性能和架构评估
/c-optimize: <性能目标> - 性能优化分析和实现
/c-debug: <调试目标> - 代码调试和问题排查
/c-deploy: <部署目标> - 部署就绪性检查和部署计划
/c-refactor: <重构目标> - 代码重构和重构计划
```


## zsh配置
```bash
# 安装 oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# zsh插件
ZSH_CUSTOM="${ZSH:-$HOME/.oh-my-zsh}/custom"
for plugin in zsh-autosuggestions zsh-completions zsh-syntax-highlighting; do
  git clone "https://github.com/zsh-users/${plugin}" "$ZSH_CUSTOM/plugins/${plugin}"
done

sed -i '/^plugins=(/ s/)$/ zsh-autosuggestions zsh-completions zsh-syntax-highlighting)/' ~/.zshrc

# starship
curl -sS https://starship.rs/install.sh | sh
echo 'eval "$(starship init zsh)"' >> ~/.zshrc

source ~/.zshrc
```

## 安装字体Cascadia Nerd 
```bash
wget https://github.com/ryanoasis/nerd-fonts/releases/download/v3.4.0/CascadiaCode.zip

wget https://github.com/ryanoasis/nerd-fonts/releases/download/v3.4.0/CascadiaMono.zip

mkdir -p ~/.local/share/fonts
unzip CascadiaCode.zip -d ~/.local/share/fonts/CascadiaCode
unzip CascadiaMono.zip -d ~/.local/share/fonts/CascadiaMono
```