if (Meteor.isServer) {
    Meteor.methods({
        checkMaleBrands: function () {
            this.unblock();
            return Meteor.http.call("GET", "https://api.dz.zalan.do/feeds/MALE/sources/brand_reco/streams/top/items?limit=100");
        },
        checkFemaleBrands: function () {
            this.unblock();
            return Meteor.http.call("GET", "https://api.dz.zalan.do/feeds/FEMALE/sources/brand_reco/streams/top/items?limit=100");
        },
    });
}
