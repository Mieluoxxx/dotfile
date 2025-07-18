proxyon() {
    export http_proxy=
    export https_proxy=
    echo "代理已开启："
}

proxyoff() {
    unset http_proxy
    unset https_proxy
    echo "代理已关闭"
}