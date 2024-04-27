export ZSH="$HOME/.oh-my-zsh"
ZSH_THEME="ys"
plugins=(
    git
    zsh-completions
    zsh-autosuggestions
    zsh-syntax-highlighting
)

source $ZSH/oh-my-zsh.sh

eval "$(zoxide init zsh)"

alias ls='lsd'
alias cd='z'

