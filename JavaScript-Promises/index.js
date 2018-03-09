/* ES7 */
const isMomHappy = true;

//Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => {
        if (isMomHappy) {
            const phone = {
                brand: "Samsung",
                color: "black"
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        
        }
    }
);

//2nd promise
async function showoff(phone) {
    return new Promise(
        (resolve, reject) => {
            let message = 'Hey friend I have a new' + phone.color + '' + phone.brand + ' phone';

            resolve(message);
        }
    );
    
};