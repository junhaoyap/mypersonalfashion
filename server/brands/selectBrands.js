if (Meteor.isServer) {
    Meteor.methods({
        checkMailBrands: function () {
            this.unblock();
            return Meteor.http.call("GET", "https://api.dz.zalan.do/feeds/MALE/sources/brand_reco/streams/top/items?limit=100");
        },
        checkFemailBrands: function () {
            this.unblock();
            return Meteor.http.call("GET", "https://api.dz.zalan.do/feeds/FEMALE/sources/brand_reco/streams/top/items?limit=100");
        },
    });
}