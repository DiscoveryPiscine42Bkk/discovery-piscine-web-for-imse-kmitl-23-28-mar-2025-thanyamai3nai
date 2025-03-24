function calculate() {
    let left = document.getElementById("left").value;
    let right = document.getElementById("right").value;
    let operator = document.getElementById("operator").value;

    // เช็กว่าต้องเป็นเลขจำนวนเต็มบวก
    if (!/^[0-9]+$/.test(left) || !/^[0-9]+$/.test(right)) {
        alert("Error :(");
        return;
    }

    left = parseInt(left);
    right = parseInt(right);
    let result;

    // เช็กว่าถ้าหารหรือโมดูโล 0 ต้องแจ้งเตือน
    if ((operator === '/' || operator === '%') && right === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    // คำนวณตามเครื่องหมายที่เลือก
    switch (operator) {
        case '+': result = left + right; break;
        case '-': result = left - right; break;
        case '*': result = left * right; break;
        case '/': result = left / right; break;
        case '%': result = left % right; break;
    }

    // แสดงผลลัพธ์
    alert(result);
    console.log(result);
}

// แจ้งเตือนทุก 30 วินาที
setInterval(() => {
    alert("Please, use me...");
}, 30000);