function $a(e){
   return document.getElementById(e);
}
// ২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 
$a("lpPrice").addEventListener('input',function(){
    var lpName;
    var lpAmount = this.value;
    if(lpAmount > 80000){
        lpName = 'I will buy a Mac Laptop';
    }else if(lpAmount > 60000){
        lpName = 'I will buy a Gaming Laptop';
    }else if(lpAmount > 40000){
        lpName = 'I will buy a Lenovo Yoga Laptop';
    }else if(lpAmount > 20000){
        lpName = 'I will buy a Second Hand Laptop';
    }else {
        lpName = 'I want to do my task using the Smart Phone';
    }
    $a("laptopResult").innerHTML=lpName;    
})

// ২৫. আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও।  
for(var i = 1; i<=39; i++){
    $a("mindNotWell").innerHTML += i + ". আসকে আমার মন ভালো নেই, ";
}

// ২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 
var numbers = 58
while(numbers<= 98){
    $a("numbdf58To98").innerHTML += numbers+", "
    numbers++
}

// ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  
var numbersEven = 412;
while(numbersEven <= 456){
    $a("numberEven").innerHTML += numbersEven + ", ";
    numbersEven = numbersEven + 2;
}

// ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 
for(var x = 581; x <= 623; x=x+2){
    $a("numberOdd").innerHTML += x + ", ";
}

// ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 
// var numberStart = 30;
// while(numberStart < 86){
//     if(numberStart > 44){
//         break;
//     }
//     $a("numberBreak").innerHTML += numberStart + ", ";
//     numberStart++
// }
for(var a = 30; a<86; a++){
    if(a > 44){
        break;
    }
    $a("numberBreak").innerHTML += a + ", ";
}
//numberSkip ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।
var bookPrices = [50,230,200,80,400,190,125,700,145,90,201,39,388,99,599];
for(var z = 0; z < bookPrices.length; z++){
    if(bookPrices[z] > 200){
        continue;
    }
    $a("numberSkip").innerHTML += bookPrices[z] + ", ";
}