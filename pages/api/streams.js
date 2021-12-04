// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { onSnapshot } from "@firebase/firestore";
import { collectionRefStreams } from "../../lib/firebase";

var streams = [];

(function streamsData() {
  onSnapshot((collectionRefStreams), (snapshot) => {
    snapshot.docs.forEach((doc) => {
      streams.push({ ...doc.data(), firebaseId: doc.id })
    })
  })
})();

export default function streamDataAPI(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  res.status(200).json(streams)
}
