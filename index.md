---
layout: default
title: "Home"
---
# GitHub profile
## Introduction (__Unofficial__)
Showcase your GitHub account's profile with GitHub offical page style.

*Made by [@joytou](https://github.com/joytou). Available on [GitHub](https://github.com/joytou/github-profile). Licensed [Apache 2](https://github.com/joytou/github-profile/blob/master/LICENSE).*



-------
-------



## Contents
 - [Usage](#usage)
    - [With iframe element](#with-iframe-element)
    - [With div element](#with-div-element)
 - [Examples](#examples)
    - [Show all](#show-all)
    - [Un-show bio: (bio={/boolean})](#un-show-bio-bioboolean)
    - [Un-show location: (location={/boolean})](#un-show-location-locationboolean)
    - [Un-show blog: (blog={/boolean})](#un-show-blog-blogboolean)
    - [Un-show email: (email={/boolean})](#un-show-email-emailboolean)
    - [Un-show company: (company={/boolean})](#un-show-company-companyboolean)
    - [Un-show follow: (follow={/boolean})](#un-show-follow-followboolean)
    - [Show basic page without optional parameters](#show-basic-page-without-optional-parameters)
    - [Auto-adjust iframe height: (iframeid={/id})](#auto-adjust-iframe-height-iframeidid)
    - [Show with div element](#show-with-div-element)
 - [Available options](#available-options)
    - [Required Parameters](#required-parameters)
    - [Optional Parameters](#optional-parameters)
 - [Code and preview](#code-and-preview)
 - [Update](#update)
 - [Open source](#open-source)
 - [Contributing](#contributing)
 - [Copyright and license](#copyright-and-license)



-------
-------



## Usage
  To use this, you just need to add an `iframe` element with `src` attribute, <br/>
  or add `div` and `script` elements with attributes in your web page.<br/>
And others attributes in the iframe or div element depend on yourself.<br/>
(**Warning**: If you use `div` element, you must add an `id` attribute that `id="gh-profile"` to the div element.)

-------
 - ### With iframe element:
<span>&lt;iframe&nbsp;src=&quot;https://github-profile.joytou.net/gh-profile.min/?user={/username}&amp;bio={/boolean}&amp;locations={/boolean}&amp;blog={/boolean}&amp;email={/boolean}&amp;company={/boolean}&amp;iframeid={/string}&amp;token_encode={/base64_encode_string}&quot;&gt;&lt;/iframe&gt;</span>

-------

  - ### With div element:
<span><span>&lt;div&nbsp;id="gh-profile"&nbsp;user="{/username}"&nbsp;follow="{/boolean}"&nbsp;bio="{/boolean}"&nbsp;locations="{/boolean}"&nbsp;email="{/boolean}"&nbsp;blog="{/boolean}"&nbsp;company="{/boolean}"&nbsp;token_encode="{/base64_encode_string}"&gt;&lt;/div&gt;</span><br/>
<span>&lt;script&nbsp;async&nbsp;defer&nbsp;src=&quot;https://github-profile.joytou.net/gh-profile.min.js&quot;&gt;&lt;/script&gt;</span></span>



-------
-------



## Examples
 - ### Show all:
   <iframe id="fr0" src="https://github-profile.joytou.net/gh-profile.min/?user=joytou&bio=true&locations=true&blog=true&email=true&company=true&follow=true&iframeid=fr0" allowtransparency="true" frameborder="0" scrolling="no" height="340" width="100%"></iframe>
   <span>&lt;iframe&nbsp;src=&quot;https://github-profile.joytou.net/gh-profile.min/?user=joytou**&amp;bio=true&amp;locations=true&amp;blog=true&amp;email=true&amp;company=true&amp;follow=true**&quot;&nbsp;allowtransparency=&quot;true&quot;&nbsp;frameborder=&quot;0&quot;&nbsp;scrolling=&quot;no&quot;&nbsp;height=&quot;240&quot;&nbsp;width=&quot;100%&quot;&gt;&lt;/iframe&gt;</span>
   
   -------
   
 - ### Un-show bio: (bio={/boolean})
   <iframe id="fr1" src="https://github-profile.joytou.net/gh-profile.min/?user=joytou&bio=false&locations=true&blog=true&email=true&company=true&follow=true&iframeid=fr1" allowtransparency="true" frameborder="0" scrolling="no" height="240" width="100%"></iframe>
   <span>&lt;iframe&nbsp;src=&quot;https://github-profile.joytou.net/gh-profile.min/?user=joytou&amp;**bio=false**&amp;locations=true&amp;blog=true&amp;email=true&amp;company=true&amp;follow=true&quot;&nbsp;allowtransparency=&quot;true&quot;&nbsp;frameborder=&quot;0&quot;&nbsp;scrolling=&quot;no&quot;&nbsp;height=&quot;240&quot;&nbsp;width=&quot;100%&quot;&gt;&lt;/iframe&gt;</span>
   
   -------
   
 - ### Un-show location: (location={/boolean})
   <iframe id="fr2" src="https://github-profile.joytou.net/gh-profile.min/?user=joytou&bio=true&locations=false&blog=true&email=true&company=true&follow=true&iframeid=fr2" allowtransparency="true" frameborder="0" scrolling="no" height="240" width="100%"></iframe>
   <span>&lt;iframe&nbsp;src=&quot;https://github-profile.joytou.net/gh-profile.min/?user=joytou&amp;bio=true&amp;**locations=false**&amp;blog=true&amp;email=true&amp;company=true&amp;follow=true&quot;&nbsp;allowtransparency=&quot;true&quot;&nbsp;frameborder=&quot;0&quot;&nbsp;scrolling=&quot;no&quot;&nbsp;height=&quot;240&quot;&nbsp;width=&quot;100%&quot;&gt;&lt;/iframe&gt;</span>
   
   -------
   
 - ### Un-show blog: (blog={/boolean})
   <iframe id="fr3" src="https://github-profile.joytou.net/gh-profile.min/?user=joytou&bio=true&locations=true&blog=false&email=true&company=true&follow=true&iframeid=fr3" allowtransparency="true" frameborder="0" scrolling="no" height="240" width="100%"></iframe>
   <span>&lt;iframe&nbsp;src=&quot;https://github-profile.joytou.net/gh-profile.min/?user=joytou&amp;bio=true&amp;locations=true&amp;**blog=false**&amp;email=true&amp;company=true&amp;follow=true&quot;&nbsp;allowtransparency=&quot;true&quot;&nbsp;frameborder=&quot;0&quot;&nbsp;scrolling=&quot;no&quot;&nbsp;height=&quot;240&quot;&nbsp;width=&quot;100%&quot;&gt;&lt;/iframe&gt;</span>
   
   -------
   
 - ### Un-show email: (email={/boolean})
   <iframe id="fr4" src="https://github-profile.joytou.net/gh-profile.min/?user=joytou&bio=true&locations=true&blog=true&email=false&company=true&follow=true&iframeid=fr4" allowtransparency="true" frameborder="0" scrolling="no" height="240" width="100%"></iframe>
   <span>&lt;iframe&nbsp;src=&quot;https://github-profile.joytou.net/gh-profile.min/?user=joytou&amp;bio=true&amp;locations=true&amp;blog=true&amp;**email=false**&amp;company=true&amp;follow=true&quot;&nbsp;allowtransparency=&quot;true&quot;&nbsp;frameborder=&quot;0&quot;&nbsp;scrolling=&quot;no&quot;&nbsp;height=&quot;240&quot;&nbsp;width=&quot;100%&quot;&gt;&lt;/iframe&gt;</span>
   
   -------
   
 - ### Un-show company: (company={/boolean})
   <iframe id="fr5" src="https://github-profile.joytou.net/gh-profile.min/?user=joytou&bio=true&locations=true&blog=true&email=true&company=false&follow=true&iframeid=fr5" allowtransparency="true" frameborder="0" scrolling="no" height="240" width="100%"></iframe>
   <span>&lt;iframe&nbsp;src=&quot;https://github-profile.joytou.net/gh-profile.min/?user=joytou&amp;bio=true&amp;locations=true&amp;blog=true&amp;email=true&amp;**company=false**&amp;follow=true&quot;&nbsp;allowtransparency=&quot;true&quot;&nbsp;frameborder=&quot;0&quot;&nbsp;scrolling=&quot;no&quot;&nbsp;height=&quot;240&quot;&nbsp;width=&quot;100%&quot;&gt;&lt;/iframe&gt;</span>
   
   -------
   
 - ### Un-show follow: (follow={/boolean})
   <iframe id="fr6" src="https://github-profile.joytou.net/gh-profile.min/?user=joytou&bio=true&locations=true&blog=true&email=true&company=true&follow=false&iframeid=fr6" allowtransparency="true" frameborder="0" scrolling="no" height="240" width="100%"></iframe>
   <span>&lt;iframe&nbsp;src=&quot;https://github-profile.joytou.net/gh-profile.min/?user=joytou&amp;bio=true&amp;locations=true&amp;blog=true&amp;email=true&amp;company=true&amp;**follow=false**&quot;&nbsp;allowtransparency=&quot;true&quot;&nbsp;frameborder=&quot;0&quot;&nbsp;scrolling=&quot;no&quot;&nbsp;height=&quot;240&quot;&nbsp;width=&quot;100%&quot;&gt;&lt;/iframe&gt;</span>
   
   -------
   
 - ### Show basic page without optional parameters:
   <iframe id="fr7" src="https://github-profile.joytou.net/gh-profile.min/?user=joytou&iframeid=fr7" allowtransparency="true" frameborder="0" scrolling="no" height="240" width="100%"></iframe>
   <span>&lt;iframe&nbsp;src=&quot;https://github-profile.joytou.net/gh-profile.min/**?user=joytou**&quot;&nbsp;allowtransparency=&quot;true&quot;&nbsp;frameborder=&quot;0&quot;&nbsp;scrolling=&quot;no&quot;&nbsp;height=&quot;240&quot;&nbsp;width=&quot;100%&quot;&gt;&lt;/iframe&gt;</span>
   
   -------
   
 - ### Auto-adjust iframe height: (iframeid={/id})
   <iframe id="fr" src="https://github-profile.joytou.net/gh-profile.min/?user=joytou&bio=true&locations=true&blog=true&email=true&company=true&follow=true&iframeid=fr" allowtransparency="true" frameborder="0" scrolling="no" height="340" width="100%"></iframe>
   <span>&lt;iframe&nbsp;**id=&quot;fr&quot;**&nbsp;src=&quot;https://github-profile.joytou.net/gh-profile.min/?user=joytou&amp;bio=true&amp;locations=true&amp;blog=true&amp;email=true&amp;company=true&amp;follow=true**&amp;iframeid=fr**&quot;&nbsp;allowtransparency=&quot;true&quot;&nbsp;frameborder=&quot;0&quot;&nbsp;scrolling=&quot;no&quot;&nbsp;height=&quot;240&quot;&nbsp;width=&quot;100%&quot;&gt;&lt;/iframe&gt;</span>

   -------
   
   - ### Show with div element
   <div id="gh-profile" user="joytou" follow="true" bio="true" locations="true" email="true" blog="true" company="true"></div>
   <script async defer src="https://github-profile.joytou.net/gh-profile.min.js"></script>
   <span><span>&lt;div&nbsp;**id=&quot;gh-profile&quot;&nbsp;user=&quot;joytou&quot;**&nbsp;follow=&quot;true&quot;&nbsp;bio=&quot;true&quot;&nbsp;locations=&quot;true&quot;&nbsp;email=&quot;true&quot;&nbsp;blog=&quot;true&quot;&nbsp;company=&quot;true&quot;&gt;&lt;/div&gt;</span><br/>
   <span>**&lt;script&nbsp;async&nbsp;defer&nbsp;src=&quot;https://github-profile.joytou.net/gh-profile.min.js&quot;&gt;&lt;/script&gt;**</span></span>



-------
-------



## Available options
### Required Parameters
You **must** declare a value for each of the following parameters:

| Option | Description |
|:----------:|:----------:|
|  `user`/`org`  | Pick one of two. GitHub __username__/__organization__ that you own |

-------

### Optional Parameters
The following parameters are **not** required. Add them as you wish.

| Option | Description |
|:----------:|:----------:|
|      `bio`            |     Show your account's **bio** record. *none* by default or  `true`        |
|      `locations` |      Show your account's **location** record. *none* by default or  `true`      |
|      `blog`          |      Show your account's **blog** record. *none* by default or  `true`      |
|      `email`         |      Show your account's **email** record. *none* by default or  `true`      |
|      `company` |       Show your account's **company** record. *none* by default or  `true`     |
|      `follow` |       Show the **Follow** button. *none* by default or  `true`     |
|      `iframeid`  |        The **id** attribute of your current iframe element. For auto adaptiving page height. <br/>(**Warning**: This attribute can only be used for `iframe` element, not for `div` element.)        |
|       `token_encode`  |        **Base64 encode** string of your **[personal access token](https://github.com/settings/tokens)**, for increasing the times of queries.<br/>(**Warning**: If using an `iframe`, the encoded string need to follow the conversion rules below: <br/>`=` => `%3d` <br/>`+` => `%2b` <br/>`/` => `%2f` )  |



-------
-------



## Code and preview
<form class="form-group">
<input type="checkbox" id="orgcheck" value="Org" onclick="myFunction()">Organization account<br/>
<input type="text" id="myInput" oninput="myFunction()" placeholder=":user" width="100%"><br/>
<input type="text" id="inputtoken" oninput="storage_token()" placeholder=":base64 encoded access token" width="100%"><br/>
<span><strong>Warning</strong>: The encoded token you enter will be stored in the local device for auto-completion.</span><br/>
<input type="checkbox" id="biocheck" value="Bio" onclick="myFunction()">Show bio<br/>
<input type="checkbox" id="locationcheck" value="Location" onclick="myFunction()">Show location<br/>
<input type="checkbox" id="blogcheck" value="Blog" onclick="myFunction()">Show blog<br/>
<input type="checkbox" id="emailcheck" value="Email" onclick="myFunction()">Show email<br/>
<input type="checkbox" id="companycheck" value="Company" onclick="myFunction()">Show company<br/>
<input type="checkbox" id="followcheck" value="Follow" onclick="myFunction()">Show follow button<br/>
<input type="checkbox" id="iframeidcheck" value="IframeId" onclick="myFunction()">Auto adiust height for iframe<br/>
  <iframe id="test_iframe" width="100%" height="240" allowtransparency="true" frameborder="0" scrolling="auto"></iframe>
  -------
With iframe element:<br/>
<textarea style="width:100%" id="iframecode" readOnly onclick="this.select()"><iframe src="https://github-profile.joytou.net/gh-profile.min/?user=joytou&bio=false&locations=false&blog=false&email=false&company=false&follow=false"></iframe></textarea>
  -------
With div element:<br/>
<textarea style="width:100%" id="divcode" readOnly onclick="this.select()"><div id="gh-profile" user="joytou" bio="false" locations="false" email="false" blog="false" company="false" follow="false"></div></textarea><textarea style="width:100%" readOnly onclick="this.select()"><script async defer src="https://github-profile.joytou.net/gh-profile.min.js"></script></textarea>
</form>
<script>
function myFunction() {
    var x = document.getElementById("myInput").value;
    var org = document.getElementById("orgcheck").checked;
    var bio = document.getElementById("biocheck").checked;
    var location = document.getElementById("locationcheck").checked;
    var blog = document.getElementById("blogcheck").checked;
    var email = document.getElementById("emailcheck").checked;
    var company = document.getElementById("companycheck").checked;
    var follow = document.getElementById("followcheck").checked;
    var iframeid = document.getElementById("iframeidcheck").checked;
    var tokenencode = document.getElementById("inputtoken").value;
    document.getElementById("myInput").placeholder=(org?":organization":":user");
    document.getElementById("test_iframe").src = "https://github-profile.joytou.net/gh-profile.min/?"+(org?"org":"user")+"=" + (x?x:"joytou")+"&bio="+bio+"&locations="+location+"&blog="+blog+"&email="+email+"&company="+company+"&follow="+follow+(iframeid?"&iframeid=test_iframe":"")+(tokenencode?"&token_encode="+encodeURIComponent(decodeURIComponent(tokenencode)):"");
    document.getElementById("iframecode").value="<iframe"+(iframeid?" id=\"iframedemo\"":"")+" src=\"https://github-profile.joytou.net/gh-profile.min/?"+(org?"org":"user")+"=" + (x?x:"joytou")+"&bio="+bio+"&locations="+location+"&blog="+blog+"&email="+email+"&company="+company+"&follow="+follow+"&iframeid=iframedemo"+(tokenencode?"&token_encode="+encodeURIComponent(decodeURIComponent(tokenencode)):"")+"\"></iframe>";
    document.getElementById("divcode").value="<div id=\"gh-profile\" "+(org?"org":"user")+"=\""+(x?x:"joytou")+"\" bio=\""+bio+"\" locations=\""+location+"\" blog=\""+blog+"\" email=\""+email+"\" company=\""+company+"\" follow=\""+follow+(tokenencode?"\" token_encode=\""+decodeURIComponent(tokenencode):"")+"\"></div>";
}
function storage_token() {
myFunction();
if (typeof(Storage) !== "undefined") {
localStorage.setItem("gh-profile_token_encode", document.getElementById("inputtoken").value);
}
}
function read_token() {
if (typeof(Storage) !== "undefined") {
document.getElementById("inputtoken").value=localStorage.getItem("gh-profile_token_encode");
}
myFunction();
}
read_token();
</script>



-------
-------



## Update 
You can view the update log by clicking on [View logs](https://github-profile.joytou.net/log/).



-------
-------



## Open source
The unofficial GitHub-profile are available on GitHub for downloading, forking, or contributing.

[View on GitHub](https://github.com/joytou/github-profile)



-------
-------



## Contributing
Thanks for your interest in contributing! There are many ways to contribute to this project. [Get started here](https://github.com/joytou/github-profile/blob/master/.github/CONTRIBUTING.md).



-------
-------



## Copyright and license
Copyright 2018 [Joytou](https://github.com/joytou). Released under [Apache 2.0](https://github.com/joytou/github-profile/blob/master/LICENSE).