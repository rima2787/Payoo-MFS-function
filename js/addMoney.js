document.getElementById('btn-add-money')
    .addEventListener('click',function(event){
             event.preventDefault();

            //  getInputFieldValueById();
            // const addMoney = getInputFieldValueById();
            // console.log('add money value',addMoney);

            const addMoney = getInputFieldValueById('input-add-money');
            const pinNum = getInputFieldValueById('input-pin-num');
            // console.log('add money value',addMoney);
            // console.log('Pin Number',pinNum);
            
            // NaN hole
            if(isNaN(addMoney)){
                alert('Failed to add money');
                return;
            }

            if(pinNum === 1234){
                const balance = getTextFieldValueById('account-balance');
                // console.log(balance,addMoney);
                const newBalance = balance + addMoney;
                document.getElementById('account-balance').innerText = newBalance;

                // add to transaction history
                const p = document.createElement('p');
                p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
                console.log(p);

                document.getElementById('transaction-container').appendChild(p);

            }
            else{
                alert('Failed,Try Again');
            }
            

})