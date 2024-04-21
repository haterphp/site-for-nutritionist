const modalOpacityAnimation = (el: HTMLElement, duration: number, isReverse: boolean = false): Animation => {
    const keyframes = [
        { opacity: '0' },
        { opacity: '1' },
    ]
    
    const options: KeyframeAnimationOptions = {
        duration,
        fill: 'forwards',
        direction: isReverse ? 'reverse' : 'normal'
    }
    
    return el.animate(keyframes, options)
}

const dialogSlideAnimation = (el: HTMLElement, duration: number, isReverse: boolean = false): Animation => {
    const keyframes = [
        { opacity: '0', transform: 'translateY(25px)' },
        { opacity: '1', transform: 'translateY(0)' },
    ]
    
    const options: KeyframeAnimationOptions = {
        duration,
        fill: 'forwards',
        direction: isReverse ? 'reverse' : 'normal'
    }
    
    return el.animate(keyframes, options)
}

export const openModalAnimation = (modalRef: HTMLElement, dialogRef: HTMLElement): Promise<Animation[]> => {
    const duration = 200

    return Promise.all([
        dialogSlideAnimation(dialogRef, duration).finished,
        modalOpacityAnimation(modalRef, duration).finished
    ])
}

export const closeModalAnimation = (modalRef: HTMLElement, dialogRef: HTMLElement): Promise<Animation[]> => {
    const duration = 200

    return Promise.all([
        dialogSlideAnimation(dialogRef, duration, true).finished,
        modalOpacityAnimation(modalRef, duration, true).finished
    ])
}