{
    //Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
    type Circle = {
        shape: 'circle';
        radius: number;
    };
    type Rectangle = {
        shape:'rectangle';
        height: number;
        width: number;
    };

    type Shape = Circle | Rectangle
    function calculateShapeArea(shape: Shape): number| undefined {
        if (shape.shape === 'circle') {
            return parseFloat((Math.PI * shape.radius ** 2).toFixed(2));
        } else if  (shape.shape ==='rectangle') {
            return shape.height * shape.width;
        }
       
    }
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea);


    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
      });

      console.log(rectangleArea);
    //

}