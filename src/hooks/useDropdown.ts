export const useDropdown = (): {
    checkAndCloseDropDown: (e: React.MouseEvent<HTMLElement>) => void
} => {
    function checkAndCloseDropDown(e: React.MouseEvent<HTMLElement>): void {
        const targetEl = e.currentTarget
        if (targetEl && targetEl.matches(':focus')) {
            setTimeout(function () {
                targetEl.blur()
            }, 0)
        }
    }

    return {
        checkAndCloseDropDown,
    }
}
