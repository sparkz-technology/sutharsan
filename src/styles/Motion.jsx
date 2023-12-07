
const transition = {
    type: "spring",
    stiffness: 300,
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96]
};

export const jumpAnimation = () => {
    return {
        initial: { opacity: 0, y: 20, scale: 0.8, },
        whileInView: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay: 0.2, ...transition }
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.8,
            transition: { ...transition, duration: 0.3 }
        },
    };
};


export const fadeAnimationVariants = {
    initial: { opacity: 0 },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1 * index,
            duration: 0.5,
            ease: "easeInOut",
        },
    }),
};


export const headTextAnimation = {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: {
        type: 'spring',
        damping: 5,
        stiffness: 40,
        restDelta: 0.001,
        duration: 0.3,
    },

}
export const headContentAnimation = {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: {
        type: 'spring',
        damping: 7,
        stiffness: 30,
        restDelta: 0.001,
        duration: 0.6,
        delay: 0.2,
        delayChildren: 0.2,
    },
}

export const slideAnimation = (direction) => {
    return {
        initial: {
            x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
            y: direction === 'down' ? 100 : direction === 'up' ? -100 : 0,
            opacity: 0,
            transition: { ...transition, delay: 0.5 },
        },
        whileInView: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: { ...transition, delay: 0 },
        },

    }
}
export const fadeAnimation = {
    initial: {
        opacity: 0,
        transition: { ...transition, delay: 0.5 },
    },
    whileInView: {
        opacity: 1,
        transition: { ...transition, delay: 0 },
    },
    exit: {
        opacity: 0,
        transition: { ...transition, delay: 0 },
    },

}
