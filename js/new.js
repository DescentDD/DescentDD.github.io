// 创建一个XMLHttpRequest对象
const xhr = new XMLHttpRequest();

// 设置请求的参数和目标API地址
const url = "https://api.wer.plus/api/djt";
xhr.open("GET", url);

// 发送请求
xhr.send();

// 监听XHR对象的状态变化
xhr.onreadystatechange = function () {
    // 判断XHR对象的状态是否为4（即请求已完成）
    if (xhr.readyState === 4) {
        // 判断服务器返回的状态码是否为200（即请求成功）
        if (xhr.status === 200) {
            // 将返回的JSON字符串解析为JavaScript对象
            const response = JSON.parse(xhr.responseText);
            // 获取评论内容
            const comment = response.data.comment;
            // 在网页的左下角展示评论内容
            const commentElement = document.createElement("div");
            commentElement.style.position = "fixed";
            commentElement.style.bottom = "0";
            commentElement.style.left = "0";
            commentElement.style.background = "linear-gradient(to right, #ff00ff, #00ffff)";
            commentElement.style.color = "#fff";
            commentElement.style.padding = "10px";
            commentElement.innerText = "随机毒只因汤喵:" + comment;
            commentElement.style.animation = "glow 1s ease-in-out infinite alternate";
            document.body.appendChild(commentElement);
        } else {
            console.log("请求失败");
        }
    }
};