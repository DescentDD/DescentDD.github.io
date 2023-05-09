<input type="text" id="url-input" placeholder="请输入目标网页的URL">
<button id="download-button">下载</button>


// 获取文本框和按钮元素
const urlInput = document.getElementById("url-input");
const downloadButton = document.getElementById("download-button");

// 监听按钮的点击事件
downloadButton.addEventListener("click", function () {
  // 获取用户输入的URL
  const url = urlInput.value;

  // 发送请求
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://v.api.aa1.cn/api/api-web-img/index.php?url=${url}&amp;type=list`);
  xhr.send();

  // 监听XHR对象的状态变化
  xhr.onreadystatechange = function () {
    // 判断XHR对象的状态是否为4（即请求已完成）
    if (xhr.readyState === 4) {
      // 判断服务器返回的状态码是否为200（即请求成功）
      if (xhr.status === 200) {
        // 将返回的JSON字符串解析为JavaScript对象
        const response = JSON.parse(xhr.responseText);
        // 获取图片URL列表
        const imageURLs = Object.values(response.data);
        // 打印图片URL列表
        console.log(imageURLs);
        // 自动下载图片
        for (let i = 0; i &lt; imageURLs.length; i++) {
          const imageURL = imageURLs[i];
          const link = document.createElement("a");
          link.href = imageURL;
          link.download = "";
          document.body.appendChild(link);
          link.click();
        }
      } else {
        console.log("请求失败");
      }
    }
  };
});
