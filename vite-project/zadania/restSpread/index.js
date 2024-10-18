export function restSpread() {
    //Zadanie 1
    const tab = [1,2,3];
    console.log(...tab);

    //Zadanie 5
    const state = {
        invoiceSection: false,
        availableYears: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005],
        formStatus: "failed",
        isUserLogged: false
    };

    const copyState = {
        ...state,
        isUserLogged: !state.isUserLogged,
        availableYears: state.availableYears.filter(el => el <= 1999)
    };
    console.log(state === copyState);
    console.log(state);
    console.log(copyState);
}