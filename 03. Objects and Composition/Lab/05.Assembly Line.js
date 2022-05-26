function createAssemblyLine() {
    return {
        hasClima(object) {
            Object.assign(object,{
                temp: 21,
                tempSettings: 21,
                adjustTemp() {
                    if (this.temp < this.tempSettings) {
                        this.temp++;
                    } else if (this.temp > this.tempSettings) {
                        this.temp--;
                    }
                },
            });
        },

        hasAudio(object) {
            Object.assign(object,{
                currentTrack: {name: null, artist: null},
                nowPlaying() {
                    if (Object.values(this.currentTrack).every(value => value!==null)) {
                        console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                    }
                },
            });
        },

        hasParktronic(object) {
            Object.assign(object,{
                checkDistance(distance) {
                    let signal = '';
                    if (distance < 0.1) {
                        signal = 'Beep! Beep! Beep!';
                    } else if (distance < 0.25) {
                        signal = 'Beep! Beep!';
                    } else if (distance < 0.5) {
                        signal = 'Beep!';
                    }
                    console.log(signal)
                }
            });
        },
    };
}


const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota', model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);