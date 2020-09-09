# Viaplay Challenge - Final Exam

You are challenged with the task of replicating a UI. It is a desktop-only web application listing TV series from Viaplay. 
You need to fork this repository and clone it down to your local computer. Implement the challenge in your forked repository and then when you are done create a PR towards the upstream repository.

Make sure to commit often!

The presented UI looks like this:

![](https://github.com/CraftAcademyLabs/coach-guides/raw/master/miscellaneous/assessments/viaplay_challenge_ui.png)


You need to fetch the data from the Viaplay API and find the appropriate attributes that hold the information you need. 

The API is located at:

```
https://content.viaplay.se/pc-se/serier/samtliga
```

The TV series listings can be found at: 
```js
yourDataObject._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
```

You can find a logo with a transparent background at: 
```
https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg
```

Displaying the shows in a row with the right formatting is a bit challenging. To help you, we've chosen to provide an example solution that is proven to yield good results. It is up to you if you want to use it though. The rest of the css needed to replicate the UI is up to you to define.

```css
.display-show {
    display: inline-block;
    width: 23%;
    width: calc(25% - ( ( 20px ) * 0.75 ) );
    margin-right: 20px;
    margin-bottom: 20px;
}

.display-show:nth-child(4n+4) {
    margin-right: 0;
}

.display-show img {
    width: 100%;
    height: auto;
}
```

Good luck and Happy Coding. 
