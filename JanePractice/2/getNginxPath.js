(function () {
    var path = document.location.pathname
    var deletePath = document.getElementById("rootPath").getAttribute("href")
    var numberOfSlash = function (pathName) {
        var num = 0;
        for (var i = 0; i < pathName.length; i++) {
            if (pathName.charAt(i) == '/') {
                num = num + 1;
            }
        }
        return num;
    }
    //get the number of "/" and  delete.
    var validSlash = numberOfSlash(path) - numberOfSlash(deletePath) - 1
    //a method that find the valid length of the virtual path. 
    var virtualPath = function (validSlash, path) {
        var len = 0;
        var traversedSlash = 0;
        for (var i = 0; i < path.length; i++) {
            if (traversedSlash == validSlash && path.charAt(i) == '/') {
                len = i;
            }
            if (path.charAt(i) == '/') {
                traversedSlash = traversedSlash + 1;
            }
        }
        return len;
    }
    var ans = path.substring(0, virtualPath(validSlash, path));
    document.write(ans);
}())
