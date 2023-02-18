function submit(){
    username = document.getElementById("username").value
    password = document.getElementById("password").value
    // luu vao local
 user = {
    username:username,
    password:password,
 };

    nhingi = JSON.stringify(user);
    localStorage.setItem("taikhoan", nhingi);
}