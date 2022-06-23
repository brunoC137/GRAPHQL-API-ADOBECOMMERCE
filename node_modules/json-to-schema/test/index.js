var JSONToSchema = require( '../src/index' );

console.log( 'ret', JSONToSchema( {
    activityInfo: {
        state: "process",
        deadline: 2201,
        remainDays: 9859,
        needDays: 7056,
        seasonNum: 4
    },
    exchangeInfo: {
        currentGroupState: "notBegin",
        allOver: false,
        currentGroupNum: 3536,
        beginDate: 6781,
        exchangeUrl: "5wn"
    },
    participateInfo: {
        finishedDays: 251,
        getAdmit: true,
        exchanged: true,
        processLevel: 2301
    },
    list: [ 1 ]
}));