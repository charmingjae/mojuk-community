import axios from "axios";

const getPost = async (postId: String, setContents: any, setLoading: any) => {
  await axios
    .get("http://localhost:8888/api/post/" + postId)
    .then((response) => {
      if (response.data.status === "failed") {
        alert("게시글을 찾을 수 없습니다.");
        window.location.replace("/");
      } else if (response.data.status === "success") {
        setContents(response.data.data);
        setLoading(false);
      }
    });
};

const deletePost = async (postId: String, publisher: String) => {
  await axios
    .post("http://localhost:8888/api/post/delete", {
      postId: postId,
      publisher: publisher,
    })
    .then((response) => {
      if (
        response &&
        response.status === 200 &&
        response.data.status === "success"
      ) {
        alert("삭제 되었습니다.");
        window.location.replace("/");
      }
    });
};

const editPost = async (contents: any) => {
  await axios
    .post("http://localhost:8888/api/post/update", {
      contents: contents,
    })
    .then((response) => {
      if (response && response.data.status === "failed") {
        alert("수정을 실패하였습니다.");
      } else if (response && response.data.status === "success") {
        window.location.replace("/post/" + contents.idx);
      } else {
        alert("알 수 없는 오류");
        window.location.replace("/");
      }
    });
};

export const PostFunction = { getPost, deletePost, editPost };
