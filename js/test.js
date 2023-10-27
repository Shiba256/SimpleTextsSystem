// Get the window dimensions
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

// Number of rectangles to generate
const number_of_rectangles = 30

// Get the container element
const container = document.getElementById("container");

function createRandomRect(){
    const x = Math.random() * windowWidth*0.9;
    const y = Math.random() * windowHeight*0.9;
    const w = 200;
    const h = 100;
    return { x, y, w, h};
}

function __intersect(rect1, rect2) {
    return (
        (rect2.x < rect1.x + rect1.w && rect1.x < rect2.x + rect2.w)&&
        (rect2.y < rect1.y + rect1.h && rect1.y < rect2.y + rect2.h)
    );
}

function Intersect(rects = [],rect){
    for(let i = 0;i<rects.length;i++){
        if(__intersect(rect,rects[i])){
            return false;
        }
    }
    return true;
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to generate and position random rectangles
function generateRandomRectangles() {
    let rects=[];
    for (let i = 0; i < number_of_rectangles; i++) {
        
        let rect = createRandomRect();
        while(!Intersect(rects,rect)){
            rect = createRandomRect();
        }
        rects.push(rect);

        const rectangle = document.createElement("div");
        
        rectangle.className = "rectangle";
        rectangle.style.left = String(rect.x) + "px";
        rectangle.style.top = String(rect.y) + "px";
        rectangle.style.width = String(rect.w) + "px";
        rectangle.style.height = String(rect.h) + "px";
        rectangle.style.backgroundColor = getRandomColor();
        rectangle.textContent = "テストテキスト" + String(i+1) + "このように表示されることを想定しています";

        container.appendChild(rectangle);
    }
}

// Call the function to generate and position rectangles
generateRandomRectangles();
