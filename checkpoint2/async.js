async function youtube() {
    data ="";
// cài đặt đến server
const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1a32db604dmsh86d43b61a30ba5cp117e04jsn4a2ba8bcc072",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  //gọi đến server lấy kết quả
  data = await fetch(
    "https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5",
    options
  );
  //xử lý kết quả - cũng tốn thơi gian
  result = await data.json();
  console.log(result);

  let myDiv = document.getElementById("myContent");
  let innerString ='';
  let list = result.albums.items;
  list.forEach(element => {
    let imgURL = element.data.coverArt.sources[0].url
    innerString = innerString + `
    <div class="img" >
        <img src="${imgURL}"/>
    </div>
     `
    
  
  });
myDiv.innerHTML = innerString
}
youtube();
