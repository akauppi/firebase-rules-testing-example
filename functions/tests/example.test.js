const firebase = require("@firebase/rules-unit-testing");

describe("Security rules", () => {
    afterEach(async () => {
        await Promise.all(firebase.apps().map((app) => app.delete()));
    });

    it("should not be allowed to read stuff", async () => {
        const app = firebase.initializeTestApp({ projectId: "whatever" });
        const db = app.firestore();
        const testDoc = db.collection("private").doc("a_doc");

        await firebase.assertFails(testDoc.get());
    });
});
