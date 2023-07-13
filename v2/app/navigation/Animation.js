import {Easing} from "react-native"

export const config = {
   config: {
       stiffness: 1000,
       damping: 50,
       mass: 3,
       overshootingClamp: true,
       resetDisplacementThreshold: 0.01,
       restSpeedThreshold: 0.01
   }
};

export const closeConfig = {
    animation: 'timing',
    config: {
        duration: 200,
        easing: Easing.linear,
    }
}