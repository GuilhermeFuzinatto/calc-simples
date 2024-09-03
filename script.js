function calc(op){
    let n1 = parseFloat(document.getElementById('num').value);
    let n2 = parseFloat(document.getElementById('ndois').value);
    let res = 0;

    if (isNaN(n1) || isNaN(n2)){
        alert('tá errado seu burrao arruma isso ai');

    }else{
        if (op == '+'){
            res = n1 + n2;
        }else if (op == '-'){
            res = n1 - n2;            
        }else if (op == '*'){
            res = n1 * n2;            
        }else if (op == '/'){
            res = n1 / n2;            
        }else if (op == '%'){
            res = n1 / 100 * n2;        
        }else if (op == '^'){
            res = n1 ** n2;  
        }
        

        document.getElementById('result').textContent = 'resultado:' + res;

    }

}