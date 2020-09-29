// console.log(Math.round(Math.random()))
const coin = {
    state: 0,
    flip: function() {
        this.state = /* Use Random function to call # btwn 0-1*/Math.round(Math.random())
        coin.state = this.state
        return coin.state
        // 1. One point: Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.
    },
    toString: function() {
      const coinString = document.createElement('div')
    //   document.body.appendChild(coinString)
        if ( this.state === 0){
            coinString.textContent = ("Heads")
        } else {
            coinString.textContent = ("Tails")  
        }
        // 2. One point: Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.
        return coinString
    },
    toHTML: function() {
        const image = document.createElement('img');
      if (this.state === 0) {
          image.src = "heads.png"
          document.body.appendChild(image)
      }else {
          document.body.appendChild(image)
          image.src = "Tails.jpeg"
      }
        return image
    }
};

function display20Flips() {
    // 4. One point: Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page. 
     //After your loop completes, return an array with the result of each flip.
    const results = [];
    for (let x= 0; x<20; x++){ 
        results.push(coin.flip())
        document.body.appendChild(coin.toString())
    }
    return results  
}

function display20Images() {
    const results = [];
    for (let x= 0; x<20; x++){
        results.push(coin.flip())
        document.body.appendChild(coin.toHTML())
        
    }
    
    return results
    // 5. One point: Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page. 
     //After your loop completes, return an array with result of each flip.
}