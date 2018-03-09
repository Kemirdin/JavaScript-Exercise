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