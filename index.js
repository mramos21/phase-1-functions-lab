// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {
    if (pickUp > 42) {
        return pickUp - 42
    } else if (pickUp < 42) {
        return 42 - pickUp 
    }
}

function distanceFromHqInFeet(pickUp) {
    return distanceFromHqInBlocks(pickUp) * 264
}

function distanceTravelledInFeet(pickUp, dropOff) {
    if (pickUp > dropOff) {
        return (pickUp - dropOff) * 264
    } else if (pickUp < dropOff) {
        return (dropOff - pickUp) * 264
    }
}

function calculatesFarePrice(pickUp, dropOff) {
    if (distanceTravelledInFeet(pickUp, dropOff) < 400) {
       return 0
    } else if (distanceTravelledInFeet(pickUp, dropOff) > 400 && distanceTravelledInFeet(pickUp, dropOff) < 2000) {
        return (distanceTravelledInFeet(pickUp, dropOff) - 400) * .02
    } else if (distanceTravelledInFeet(pickUp, dropOff) > 2000 && distanceTravelledInFeet(pickUp, dropOff) < 2500) {
        return 25
    } else if (distanceTravelledInFeet(pickUp, dropOff) > 2500) {
       return 'cannot travel that far'
    }
}