import axios from "axios";

const registerComment = async (postID: any, comment: any, userID: any) => {
  await axios
    .post("http://localhost:8888/api/comment/register", {
      postID: postID,
      comment: comment,
      userID: userID,
    })
    .then((response) => {
      if (response && response.data.status === "success") {
        alert("등록 완료");
      } else {
        alert("등록 실패");
      }
    });
};

const getComment = async (
  postID: any,
  setComment: React.Dispatch<React.SetStateAction<any[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  await axios
    .post("http://localhost:8888/api/comment/get", { postID: postID })
    .then((response) => {
      setComment(response.data.data);
      setLoading(false);
    });
};

export const CommentFunction = { registerComment, getComment };
