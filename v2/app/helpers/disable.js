
const disable = (props) => {

    if (!Object.keys(props.touched).length) {
        return true
    } else if (Object.keys(props.touched).length) {
        if (!props.dirty) {
            return true
        } else {
            if (Object.keys(props.errors).length) {
                return true
            } else {
                return false
            }

        }
    }

}

export default disable