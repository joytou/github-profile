document.getElementById("gh-profile").innerHTML=("<div class=\'profile-header\'><a target=\'_blank\'id=\'gh-profile-avatar_a\'href=\'\'><img id=\'gh-profile-avatar_img\'alt=\'\'width=\'110\'height=\'110\'class=\'avatar avatar\'src=\'\'></a><h1 id=\'gh-profile-name_h1\'></h1><h3 id=\'gh-profile-login_h3\'></h3><ul class=\'details\'id=\'gh-profile-ul\'><li class=\'details-item user-profile-company\'id=\'gh-profile-company_li\'><svg class=\'octicon octicon-organization\'viewBox=\'0 0 16 16\'version=\'1.1\'width=\'16\'height=\'16\'aria-hidden=\'true\'><path fill-rule=\'evenodd\'d=\'M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z\'></path></svg>&nbsp;<span id=\'gh-profile-company_span\'></span></li><li class=\'details-item\'id=\'gh-profile-location_li\'><svg class=\'octicon octicon-location\'viewbox=\'0 0 12 16\'version=\'1.1\'width=\'12\'height=\'16\'aria-hidden=\'true\'><path fill-rule=\'evenodd\'d=\'M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z\'></path></svg>&nbsp;<span id=\'gh-profile-location_span\'></span></li><li class=\'details-item css-truncate\'id=\'gh-profile-email_li\'><svg class=\'octicon octicon-mail\'viewBox=\'0 0 14 16\'version=\'1.1\'width=\'14\'height=\'16\'aria-hidden=\'true\'><path fill-rule=\'evenodd\'d=\'M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z\'></path></svg>&nbsp;<a target=\'_blank\'class=\'css-truncate-target email\'href=\'\'id=\'gh-profile-email_a\'></a></li><li class=\'details-item css-truncate\'id=\'gh-profile-blog_li\'><svg class=\'octicon octicon-link\'viewbox=\'0 0 16 16\'version=\'1.1\'width=\'16\'height=\'16\'aria-hidden=\'true\'><path fill-rule=\'evenodd\'d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'></path></svg>&nbsp;<a target=\'_blank\'id=\'gh-profile-blog_a\'rel=\'nofollow me\'class=\'css-truncate-target\'href=\'\'></a></li></ul></div><div class=\'divtable\'><a target=\'_blank\'id=\'gh-profile-repos_a\'class=\'text-gray divtable-cell\'><strong id=\'gh-profile-repos_strong\'>{public_repos}</strong><br/>Repos</a><a target=\'_blank\'id=\'gh-profile-gists_a\'class=\'text-gray divtable-cell\'><strong id=\'gh-profile-gists_strong\'>{public_gists}</strong><br/>Gists</a><a target=\'_blank\'id=\'gh-profile-followers_a\'class=\'text-gray divtable-cell\'><strong id=\'gh-profile-followers_strong\'>{followers}</strong><br/>Followers</a></div><div class=\'user-profile-bio f6 text-gray mt-2\'id=\'gh-profile-bio_display\'><div id=\'gh-profile-bio_div\'></div></div><div class=\'user-following-container\'id=\'gh-profile-follow_div\'><div class=\'follow\'><a target=\'_blank\'class=\'btn btn-block\'id=\'gh-profile-follow_a\'>Follow</a></div></div><div class=\'border-top py-3 clearfix\'id=\'gh-profile-organizations_div\'><h2 class=\'mb-1 h4\'>Organizations</h2></div><div class=\'Box mb-3\' id=\'gh-profile-orgmember_div\'><div class=\'Box-body\'><a target=\'_blank\' class=\'d-block text-gray-dark\' href=\'/orgs/github/people\' data-ga-click=\'Orgs, go to people, location:profile people module; text:People\' id=\'gh-profile-orgmember_a\'><span class=\'float-right f5 text-gray\'>More<svg class=\'octicon octicon-chevron-right\' viewbox=\'0 0 8 16\' version=\'1.1\' width=\'8\' height=\'16\' aria-hidden=\'true\'><path fill-rule=\'evenodd\' d=\'M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3l5 5z\'></path></svg> </span><h4 class=\'f4 text-normal mb-3\'>People</h4></a><div class=\'member-avatar-group d-flex flex-wrap\' id=\'gh-profile-org_member_list_div\'></div></div></div>");
var Base64 = {

    // private property
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
/*
    // public method for encoding
    encode: function(input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = Base64._utf8_encode(input);

        while (i < input.length) {

            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

        }

        return output;
    },
*/
    // public method for decoding
    decode: function(input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {

            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

        }

        output = Base64._utf8_decode(output);

        return output;

    },
/*
    // private method for UTF-8 encoding
    _utf8_encode: function(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    },
*/
    // private method for UTF-8 decoding
    _utf8_decode: function(utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        while (i < utftext.length) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return string;
    }

};
var user = (document.getElementById("gh-profile").getAttribute("user") ? document.getElementById("gh-profile").getAttribute("user"): null),
org =(document.getElementById("gh-profile").getAttribute("org") ? document.getElementById("gh-profile").getAttribute("org"): null),
bio = (document.getElementById("gh-profile").getAttribute("bio") ? (document.getElementById("gh-profile").getAttribute("bio") === "false" ? false: true) : false),
locations = (document.getElementById("gh-profile").getAttribute("locations") ? (document.getElementById("gh-profile").getAttribute("locations") === "false" ? false: true) : false),
blog = (document.getElementById("gh-profile").getAttribute("blog") ? (document.getElementById("gh-profile").getAttribute("blog") === "false" ? false: true) : false),
email = (document.getElementById("gh-profile").getAttribute("email") ? (document.getElementById("gh-profile").getAttribute("email") === "false" ? false: true) : false),
company = (document.getElementById("gh-profile").getAttribute("company") ? (document.getElementById("gh-profile").getAttribute("company") === "false" ? false: true) : false),
follow = (document.getElementById("gh-profile").getAttribute("follow") ? (document.getElementById("gh-profile").getAttribute("follow") === "false" ? false: true) : false),
token = (document.getElementById("gh-profile").getAttribute("token_encode") ? Base64.decode(document.getElementById("gh-profile").getAttribute("token_encode")): null),
head = document.getElementsByTagName("head")[0];
jsonp("https://api.github.com/"+(org?"orgs":"users")+"/"+(org?org:user));
function addK(t) {
    var n = parseInt(t, 10);
    if (n < 1000) {
        return n;
    } else {
        n = n / 1000;
        return n.toFixed(1) + "k";
    }
}
function addCommas(t) {
    return String(t).replace(/(\d)(?=(\d{3})+$)/g, "$1,");
}
function jsonp(t, e) {
    var r = document.createElement("script");
    r.src = t + "?" + (token==null?"":("access_token=" + token+"&")) + "callback=" + (e ? e: "callback");
    head.appendChild(r);
    r = document.createElement("link");
    r.href="https://github-profile.joytou.net/style.css";
    r.rel="stylesheet";
    head.insertBefore(r,head.firstChild);
}
function contains(arr, str) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == str) {
            return true;
        } else {
            return false;
        }
    }
}
function matches(str) {
    return String(str).replace(/@([\w][\w-]*)/g, "<a target=\"_blank\" class=\"user-mention\" href=\"https://github.com/$1\">@$1</a>");
}
function callback(t) {
    document.getElementById("gh-profile-login_h3").innerHTML = addCommas(t.data.login);
    document.getElementById("gh-profile-name_h1").innerHTML = addCommas(t.data.name);
    document.getElementById("gh-profile-avatar_img").setAttribute("src", addCommas(t.data.avatar_url));
    document.getElementById("gh-profile-avatar_img").setAttribute("alt", addCommas(t.data.name));
    document.getElementById("gh-profile-avatar_a").setAttribute("href", addCommas(t.data.avatar_url));
    document.getElementById("gh-profile-repos_strong").innerHTML = addK(t.data.public_repos);
    document.getElementById("gh-profile-gists_strong").innerHTML = addK(t.data.public_gists);
    document.getElementById("gh-profile-followers_strong").innerHTML = addK(t.data.followers);
    document.getElementById("gh-profile-repos_a").setAttribute("href", "https://github.com/{login}?tab=repositories".replace("{login}", addCommas(t.data.login)));
    document.getElementById("gh-profile-gists_a").setAttribute("href", "https://gist.github.com/{login}".replace("{login}", addCommas(t.data.login)));
    document.getElementById("gh-profile-followers_a").setAttribute("href", "https://github.com/{login}/followers".replace("{login}", addCommas(t.data.login)));
    if (locations) {
        document.getElementById("gh-profile-location_span").innerHTML = addCommas(t.data.location);
    } else {
        document.getElementById("gh-profile-location_li").style.display = "none";
    }
    if (blog) {
        document.getElementById("gh-profile-blog_a").innerHTML = addCommas(t.data.blog);
        document.getElementById("gh-profile-blog_a").setAttribute("href", addCommas(t.data.blog));
    } else {
        document.getElementById("gh-profile-blog_li").style.display = "none";
    }
    if (email) {
        var a_element = document.getElementById("gh-profile-email_a");
        a_element.setAttribute("href", "mailto:" + addCommas(t.data.email));
        a_element.innerHTML = addCommas(t.data.email);
    } else {
        document.getElementById("gh-profile-email_li").style.display = "none";
    }
    if (company) {
        document.getElementById("gh-profile-company_span").innerHTML = matches(addCommas(t.data.company)) + (addCommas(t.data.site_admin) === "true" ? "<span class=\"label bg-blue text-uppercase\">Staff</span>": "");
        jsonp(addCommas(t.data.organizations_url), "organization_query");
    } else {
        document.getElementById("gh-profile-company_li").style.display = "none";
        document.getElementById("gh-profile-organizations_div").style.display = "none";
    }
    if (bio) {
        document.getElementById("gh-profile-bio_div").innerHTML = matches(addCommas(t.data.bio));
    } else {
        document.getElementById("gh-profile-bio_display").style.display = "none";
    }
    if (follow) {
        document.getElementById("gh-profile-follow_a").setAttribute("href", "https://github.com/login?return_to=%2F" + addCommas(t.data.login));
    } else {
        document.getElementById("gh-profile-follow_div").style.display = "none";
    }
    if (addCommas(t.data.type)=="Organization") {
       document.getElementById("gh-profile-organizations_div").style.display="none";
       document.getElementById("gh-profile-name_h1").innerHTML+=addCommas(t.data.is_verified)==="true"?"<span class=\"js-menu-target Label Label--outline text-green rounded-1\" aria-label=\"View verified domains\" aria-haspopup=\"true\" aria-expanded=\"false\">Verified</span>":"";
       document.getElementById("gh-profile-orgmember_a").setAttribute("href","https://github.com/orgs/"+addCommas(t.data.login)+"/people");
        jsonp("https://api.github.com/orgs/"+addCommas(t.data.login)+"/members", "orgmember_query");
    } else {
        document.getElementById("gh-profile-orgmember_div").style.display="none";
    }
}
function organization_query(t) {
    for (var i = 0; i < t.data.length; i++) {
        document.getElementById("gh-profile-organizations_div").innerHTML += ("<a target=\"_blank\" aria-label=\"" + addCommas(t.data[i].login) + "\" itemprop=\"follows\" class=\"tooltipped tooltipped-n avatar-group-item\" href=\"https://github.com/" + addCommas(t.data[i].login) + "\"><img src=\"" + addCommas(t.data[i].avatar_url) + "\" class=\"avatar\" width=\"35\" height=\"35\" alt=\"@" + addCommas(t.data[i].login) + "\"></a>&nbsp;");
    }
}
function orgmember_query(t) {
    for (var i = 0; i < t.data.length; i++) {
        document.getElementById("gh-profile-org_member_list_div").innerHTML+=("<a target=\"_blank\" href=\"https://github.com/"+addCommas(t.data[i].login)+"\" class=\"member-avatar\" data-ga-click=\"Orgs, go to person, location:profile people module; text:username\"><img class=\"avatar\" src=\""+addCommas(t.data[i].avatar_url)+"\" width=\"35\" height=\"35\" alt=\"@"+addCommas(t.data[i].login)+"\"></a>&nbsp;");
    }
}