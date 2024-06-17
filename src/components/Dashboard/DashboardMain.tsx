import { useParams } from 'react-router-dom';
import styles from '../../styles/UserAccount.module.scss';
import { useGetUserQuery } from '../../store/api/userApi';
import { MainBlock } from './MainBlock';
import { blocks } from '../../constants/useraccount.constants';

export const DashboardMain = () => {

  const { id } = useParams()
  const { data: user, isLoading, isSuccess } = useGetUserQuery(id)
  const blocksInfo = [
    [
      <><p>{user && user.firstname} {user && user.surname}</p> <p>{user && user.email}</p></>,
      <><p>You don't subscribe to our newsletter.</p></>
    ],
    [
      <><p>You have not set a default billing address.</p></>,
      <><p>You have not set a default shipping address.</p></>
    ]
  ]

  return(
    <div className={styles.dashboard__main}>
      {/* {isLoading ? (<div>Loading</div>) : isSuccess ? (
        <MainBlock 
        headerBlock={'Account Information'}
        headersInfoBlock={['Contact Information', 'Newsletters']}
        info={[
          <><p>{user.firstname} {user.surname}</p>
          <p>{user.email}</p></>,
          <><p>You don't subscribe to our newsletter.</p></>
        ]}
        namesEdit={['Edit', 'Edit']}
        paths={['information', 'newsletter_subscriptions']}
        secondLinks='Change Password'
        />
      ) : (<div>Not Found</div>)} */}
      {isLoading ? (<div>Loading</div>) : isSuccess ? blocks.map((block, i) => {
        return <MainBlock 
        key={i}
        headerBlock={block.headerBlock}
        headersInfoBlock={block.headersInfoBlock}
        info={blocksInfo[i]}
        namesEdit={block.namesEdit}
        paths={block.paths}
        secondLinks={block.secondLinks}
        headerLink={block.headerLink}
        />
      }) : (<div>Not Found</div>)}
    </div>
  );
};
