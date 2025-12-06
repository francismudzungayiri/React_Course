import { useState } from "react";
import Button from "./components/Button";
import TextInput from "./components/TextInput";

const App = () => {
  const [friends, setFriends] = useState(["Alice", "Charlie", "David"]);
  const [newFriend, setNewFriend] = useState("");
  const [hideAddFriend, setHideAddFriend] = useState(true);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [wholeBill, setWholeBill] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendBill = wholeBill ? wholeBill - myBill : "";
  const [selectedPayer, setSelectedPayer] = useState("");

  const calcSplitBill = () => {
    if (!selectedPayer) {
      alert("Please select who is paying the bill.");
      return;
    }

    if (selectedPayer !== "you") {
      alert(
        `You owe ${selectedFriend} $${
          myBill < friendBill ? friendBill - myBill : myBill - friendBill
        }. Total Bill: $${wholeBill}`
      );
    } else {
      alert(`${selectedFriend} owes you $${myBill}. Total Bill: $${wholeBill}`);
    }

    // Reset fields after calculation
    setWholeBill("");
    setMyBill("");
    setSelectedPayer("");
    setSelectedFriend(null);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-linear-to-b from-[#c0c2c3] to-[#eef2f3]">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Eat-n-Split
      </h1>
      <div className="w-4/5 flex">
        <div className="w-1/2 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Friends List
          </h2>
          <ul className=" list-none list-inside space-y-2">
            {friends.map((friend, index) => (
              <li key={index} className="text-gray-600 flex justify-between ">
                {friend}
                <p>{}</p>
                <button
                  onClick={() => {
                    if (selectedFriend === friend) {
                      setSelectedFriend(null);
                    } else {
                      setSelectedFriend(friend);
                    }
                  }}
                  className="px-4 py-2 cursor-pointer border border-blue-400 rounded-sm text-blue-400 hover:bg-blue-400 hover:text-white transition"
                >
                  {selectedFriend === friend ? "close" : "select"}
                </button>
              </li>
            ))}
          </ul>
          <Button text={"Add Friend"} onClick={() => setHideAddFriend(false)} />
          {/* ADD FRIEND*/}
          <div
            className={`${
              hideAddFriend ? "hidden" : ""
            } mt-6 p-4 border-t border-gray-300`}
          >
            <TextInput
              onChange={(e) => setNewFriend(e.target.value)}
              value={newFriend}
              placeholder={"Add New Friend"}
              name={"friendName"}
            />
            <Button
              onClick={() => {
                if (newFriend.trim() !== "") {
                  setFriends([...friends, newFriend.trim()]);
                  setNewFriend("");
                  setHideAddFriend(true);
                } else {
                  alert("Please enter a valid name.");
                  setHideAddFriend(true);
                }
              }}
              text={"Confirm"}
              type="confirm"
            />
          </div>
        </div>
        {selectedFriend && (
          <div className="w-1/2 p-6 bg-amber-100">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              {`Split a bill with ${selectedFriend}`}
            </h2>
            <div className="flex gap-6 items-center">
              <p className="text-gray-700 text-lg font-medium">Bill Value</p>
              <TextInput
                onChange={(e) => setWholeBill(Number(e.target.value))}
                placeholder={"100"}
                value={wholeBill}
              />
            </div>
            <div className="flex gap-6 items-center">
              <p className="text-gray-700 text-lg font-medium">My Expense</p>
              <TextInput
                placeholder={"100"}
                value={myBill}
                onChange={(e) => setMyBill(Number(e.target.value))}
              />
            </div>
            <div className="flex gap-6 items-center">
              <p className="text-gray-700 text-lg font-medium">
                {`${selectedFriend}`}'s Expense
              </p>
              <TextInput placeholder={"000"} value={friendBill} disabled />
            </div>
            <div>
              <p className="flex gap-6 items-center"> Who is paying</p>
              <select
                className="w-1/2 p-2 inline border border-gray-700 rounded-md mt-2"
                onChange={(e) => setSelectedPayer(e.target.value)}
              >
                <option value="" disabled selected>
                  Choose Who is paying
                </option>
                <option value="you">You</option>
                <option value={`${selectedFriend}`}>{selectedFriend} </option>
              </select>
            </div>
            <Button text={"Split Bill"} type="submit" onClick={calcSplitBill} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
