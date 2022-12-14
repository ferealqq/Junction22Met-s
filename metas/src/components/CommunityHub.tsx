import styled from "styled-components";
import { useEffect, useState } from "react";
import { Colors } from "../styles/colors";
import { Body, Headline, SmallData, TitleOne } from "./text";
import backArrow from "../assets/images/backArrow.png";
import { CreateCommunity } from "./CreateCommunity";
import { useWorldModelStore,useCommunityStore,useUserInfoStore } from "../index";
import { postCommunity } from "../data/api";

interface CommunityHubProps {
  open: boolean;
  closeCommunity: () => void;
  createForest: () => void;
}

interface ContainerProps {
  open: boolean;
}

export const CommunityHub = ({
  open,
  closeCommunity,
  createForest,
}: CommunityHubProps) => {
  const token = useUserInfoStore((state: any) => state.token)
  const comms = useCommunityStore((state: any) => state.communities)
  const fetchCommunity = useCommunityStore((state: any) => state.fetchCommunity);
  const setCommunities = useCommunityStore((state: any) => state.setCommunities);

  const setCommunityForest = useWorldModelStore(
    (state: any) => state.setCommunityWorld
  );
  const openCommunityForest = () => {
    setCommunityForest();
    closeCommunity();
  };
  const [createStatus, setCreateStatus] = useState(false);

  useEffect(() => {
    console.log(createStatus);
    fetchCommunity();
  }, [createStatus]);

  const createForestAndClose = async (names: string[]) => {
    postCommunity({names},token).then((comm)=>{
      setCommunities({
        comm,
        ...comms,
      });
      setCreateStatus(false);
      createForest();
    });
  };

  console.log("community")
  console.log(comms)
  return (
    <Container open={open}>
      <TopBar onClick={() => setCreateStatus(false)}>
        <BackArrow src={backArrow} onClick={closeCommunity} />
        <Title>Community</Title>
        <Space />
      </TopBar>
      {
        comms.length > 0 && comms.map((item:any) => {
          return <Community openCommunityForest={openCommunityForest} data={item} key={item.created_at} />;
        })
      }

      <AddNew onClick={() => setCreateStatus(true)}>
        <AddNewText>Plant New Forest</AddNewText>
      </AddNew>

      <CreateCommunity
        createForest={createForestAndClose}
        open={createStatus}
      />
    </Container>
  );
};

const Community = ({data,openCommunityForest}: any) => {
  return (
    <SingleCommunity>
      <Row>
        <TextBox>
          <SubTitle>Community Forest</SubTitle>
          <SmallTitle>{data.users.map((name: string) => name.charAt(0).toUpperCase() + name.slice(1)).join(", ")}</SmallTitle>
        </TextBox>
        <HalfBox>
          <InfoText>{data.money_saved} ???</InfoText>
          <Desc>total saved</Desc>
        </HalfBox>
      </Row>
      <Row>
        <Box>
          <InfoText>{data.users.length}</InfoText>
          <Desc>players</Desc>
        </Box>
        <Box>
          <InfoText>17 days</InfoText>
          <Desc>since seeding</Desc>
        </Box>
        <CTA onClick={openCommunityForest}>
          <InfoText>Enter Woods</InfoText>
        </CTA>
      </Row>
    </SingleCommunity>
  );
};

const AddNewText = styled(Body)`
  color: ${Colors.sins};
`;

const AddNew = styled.button`
  background: ${Colors.snow};
  margin-top: 32px;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  outline: none;
  border: none;
  transition: 0.1s;
  z-index: 9;
  filter: drop-shadow(0px 4px 0px rgba(0, 0, 0, 0.25));

  &:active {
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.25));
    background: ${Colors.grey};
  }
`;

const SmallTitle = styled(Headline)`
  color: ${Colors.mdma};
  margin-top: 4px;
`;

const SubTitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${Colors.black};
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Desc = styled(SmallData)`
  color: ${Colors.mdmaDark};
`;

const InfoText = styled(Body)`
  color: ${Colors.analgreen};
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: solid ${Colors.analgreen} 1px;
  height: 64px;
  width: 64px;
  border-radius: 8px;
`;

const HalfBox = styled(Box)`
  width: 128px;
  flex-shrink: 0;
  flex-grow: 0;
`;

const CTA = styled(Box)`
  width: 128px;
  background: ${Colors.analgreen};

  > p {
    color: ${Colors.snow};
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 6px 0;
`;

const SingleCommunity = styled.div`
  background: ${Colors.snow};
  border-radius: 12px;
  width: 90%;
  padding: 24px 30px;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const Space = styled.div`
  width: 44px;
`;

const BackArrow = styled.img`
  width: 44px;
  height: 44px;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 48px;
`;

const Title = styled(TitleOne)`
  margin: 24px;
  color: ${Colors.snow};
`;

const Container = styled.div<ContainerProps>`
  width: 100%;
  position: fixed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${Colors.base};
  z-index: 8;
  transition: 0.4s;
  top: ${(props) => (props.open ? 0 : "-100%")};
`;
