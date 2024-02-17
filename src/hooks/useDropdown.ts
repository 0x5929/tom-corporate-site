export const useDropdown = (): {
    checkAndCloseDropDown: (e: React.MouseEvent<HTMLElement>) => void
} => {
    function checkAndCloseDropDown(e: React.MouseEvent<HTMLElement>): void {
        const targetEl: EventTarget & HTMLElement = e.currentTarget
        if (targetEl && targetEl.matches(':focus')) {
            setTimeout(function (): void {
                targetEl.blur()
            }, 0)
        }
    }

    return {
        checkAndCloseDropDown,
    }
}
