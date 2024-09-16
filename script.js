function calcula(){
    let n1 = parseFloat(document.getElementById('zeroum').value);
    let n2 = parseFloat(document.getElementById('zerodois').value);
    let res = 0;
    let op = document.querySelector('input[name = "opera"]:checked').value;

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
            if (n2 == 0){
                alert('nao da pra dividir por 0 seu mongol');
            }else{
                res = n1 / n2;
            }
        }else if (op == '%'){
            res = n1 / 100 * n2;
        }else if (op == '^'){
            res = n1 ** n2;  
        }else{
            alert('escolhe uma operação seu imbecil');
        }
        
        document.getElementById('result').innerText = res;

    }

}
