import Skeleton from "react-loading-skeleton";
import { Container, Content, Profile, Repo, RepoList, Repositories, SkeletonContent } from "./styles";

export function SkeletonCard() {
  return (
    <SkeletonContent>
      <Container>
        <Skeleton width={148} height={148} />

        <Profile>
          <span>
            <h1><Skeleton width={128} /></h1>
            <p><Skeleton count={2} /></p>
            <span><Skeleton width={128} /></span>
          </span>
        </Profile>
      </Container>

      <Content>
        <Repositories>
          <span>
            <h1>Repositórios</h1>
            <p><Skeleton width={128} /></p>
          </span>

          <RepoList>
            <Repo>
              <span>
                <h1><Skeleton width={128} /></h1>
                <span><Skeleton width={30} /></span>
              </span>
              <p><Skeleton /></p>
            </Repo>
            <Repo>
              <span>
                <h1><Skeleton width={128} /></h1>
                <span><Skeleton width={30} /></span>
              </span>
              <p><Skeleton /></p>
            </Repo>
            <Repo>
              <span>
                <h1><Skeleton width={128} /></h1>
                <span><Skeleton width={30} /></span>
              </span>
              <p><Skeleton /></p>
            </Repo>
            <Repo>
              <span>
                <h1><Skeleton width={128} /></h1>
                <span><Skeleton width={30} /></span>
              </span>
              <p><Skeleton /></p>
            </Repo>
          </RepoList>
        </Repositories>
      </Content>
    </SkeletonContent>
  )
}