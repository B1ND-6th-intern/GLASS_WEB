import "./ProfileInfo.css";

const ProfileInfo = ({ name, grade, group, number, introdution }) => {
  return (
    <div id="profileInfo-container">
      <div id="profileInfo-imgWrap">
        <div id="profileInfo-img"></div>
      </div>
      <div id="profileInfo-infoWrap">
        <div id="profileInfo-nameWrap">
          <p id="profileInfo-name">{name}</p>
        </div>
        <div id="profileInfo-schoolInfoWrap">
          <p>{grade}학년</p>
          <p>{group}반</p>
          <p>{number}번</p>
        </div>
        <div id="profileInfo-intro">{introdution}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
