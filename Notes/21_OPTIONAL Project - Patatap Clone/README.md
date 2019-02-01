# Patatap Website Clone

- Learning **paper.js**.
- Need to download paperscript syntax highlighter in VSCode
- Create a Paper.js **Path** to **draw a line** into it: `var path = new Path();`
- Give the stroke a color: `path.strokeColor = 'violet';`
- Move to start and draw a line from there: `path.moveTo(start);`
- Note the **plus** operator on Point objects: `path.lineTo(start + [ 100, -50 ]);`
- Create a **Path.Circle** to **draw a Circle**: `var myCircle = new Path.Circle(new Point(100, 70), 50);`
- **Fill the color** inside the circle using: `myCircle.fillColor = 'red';`
- My **Own Excersice Script** for displaying 100 circles,
    ```
    var circle = new Path.Circle(new Point(0, 0), 10);
        
        for( var i = 0; i < 1000; i+=50 ) {
            for( var j = 0; j<1000; j+=50) {
                var copyCircle = circle.clone();
                copyCircle.position.x += i;
                copyCircle.position.y += j;
                copyCircle.fillColor = '#af009f';
            }
        }
    ```
- Much easier and smaller code,
    ```
    for( var x = 0; x < 1000; x+=100 ) {
        for( var y = 0; y<1000; y+=100) {
            new Path.Circle(new Point(x, y), 10).fillColor = '#af009f';
        }
    }
    ```
- **Key Press Down** by `function onKeyDown(event)`
- Get **Screen width and height** by `console.log(view.size.width);` and `console.log(view.size.height);`
- Changing **animation on each frame** by `function onFrame(event)`
- Change the **fillColor.hue** of the object on each frame
    ```
    function onFrame(event){
        animatedCircle.fillColor.hue += 1;
    }
    ```
- To scale an image up or down using - `.scale();`
- To copy an image with all the property using - `.push()`