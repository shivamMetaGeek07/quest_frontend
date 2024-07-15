import React from 'react'
import UserCard from './components/HomeCard/UserCard';
import CommunityCard from './components/HomeCard/CommunityCard';
import EcoCate from './components/HomeCard/EcoCate';
import EducationCardList from './components/HomeCard/EducationCard';
import GrantsCard from './components/HomeCard/GrantsCard';


type CommunityCardData = {
  imageUrl: string;
  alphaHub: string;
  quest: number;
  followers: number;
  bio: string;
};


const communityCardsData: CommunityCardData[] = [
  {
    imageUrl: 'https://s3-alpha-sig.figma.com/img/42f5/13a3/4432e1deb16bde26b61e2dbe7c954241?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VokOknLrLdC7RKNmvjAaZ-dd8AHG7IUllQoyaAKQYhrQ6JkyH9vmGjWxZuVtzPelNqSwVFTbP1g8wRtwFejAodAjCQaGwyUm5DurxzgXtBr9YP-zVnGGcy3PxFYdC6VqznebbGmjUdccjrlfBJ5-0lRp91YaxklOI4D2XtcZpn~Xa316yCWM-JKMZ90QuNkIUBiatov4ycI9yCD8ig-74KZnL-orBsG2PPpYg4Z2KRQ25pBeUl3MPsf~m8gb2-Pn24snedqk3bYsK5WHZTUoM-DeFfwRSoHZg2hDWwfF3lgoh~x0rnU33iOHhlWdAb-WVCmc7gwVeiUvHRPKc3eBnA__',
    alphaHub: 'ALPHA HUB',
    quest: 216,
    followers: 7701,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit.'
  },
  {
    imageUrl: 'https://s3-alpha-sig.figma.com/img/42f5/13a3/4432e1deb16bde26b61e2dbe7c954241?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VokOknLrLdC7RKNmvjAaZ-dd8AHG7IUllQoyaAKQYhrQ6JkyH9vmGjWxZuVtzPelNqSwVFTbP1g8wRtwFejAodAjCQaGwyUm5DurxzgXtBr9YP-zVnGGcy3PxFYdC6VqznebbGmjUdccjrlfBJ5-0lRp91YaxklOI4D2XtcZpn~Xa316yCWM-JKMZ90QuNkIUBiatov4ycI9yCD8ig-74KZnL-orBsG2PPpYg4Z2KRQ25pBeUl3MPsf~m8gb2-Pn24snedqk3bYsK5WHZTUoM-DeFfwRSoHZg2hDWwfF3lgoh~x0rnU33iOHhlWdAb-WVCmc7gwVeiUvHRPKc3eBnA__',
    alphaHub: 'BETA HUB',
    quest: 123,
    followers: 4567,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit.'
  },
  {
    imageUrl: 'https://s3-alpha-sig.figma.com/img/42f5/13a3/4432e1deb16bde26b61e2dbe7c954241?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VokOknLrLdC7RKNmvjAaZ-dd8AHG7IUllQoyaAKQYhrQ6JkyH9vmGjWxZuVtzPelNqSwVFTbP1g8wRtwFejAodAjCQaGwyUm5DurxzgXtBr9YP-zVnGGcy3PxFYdC6VqznebbGmjUdccjrlfBJ5-0lRp91YaxklOI4D2XtcZpn~Xa316yCWM-JKMZ90QuNkIUBiatov4ycI9yCD8ig-74KZnL-orBsG2PPpYg4Z2KRQ25pBeUl3MPsf~m8gb2-Pn24snedqk3bYsK5WHZTUoM-DeFfwRSoHZg2hDWwfF3lgoh~x0rnU33iOHhlWdAb-WVCmc7gwVeiUvHRPKc3eBnA__',
    alphaHub: 'GAMMA HUB',
    quest: 789,
    followers: 2345,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit.'
  },
  {
    imageUrl: 'https://s3-alpha-sig.figma.com/img/42f5/13a3/4432e1deb16bde26b61e2dbe7c954241?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VokOknLrLdC7RKNmvjAaZ-dd8AHG7IUllQoyaAKQYhrQ6JkyH9vmGjWxZuVtzPelNqSwVFTbP1g8wRtwFejAodAjCQaGwyUm5DurxzgXtBr9YP-zVnGGcy3PxFYdC6VqznebbGmjUdccjrlfBJ5-0lRp91YaxklOI4D2XtcZpn~Xa316yCWM-JKMZ90QuNkIUBiatov4ycI9yCD8ig-74KZnL-orBsG2PPpYg4Z2KRQ25pBeUl3MPsf~m8gb2-Pn24snedqk3bYsK5WHZTUoM-DeFfwRSoHZg2hDWwfF3lgoh~x0rnU33iOHhlWdAb-WVCmc7gwVeiUvHRPKc3eBnA__',
    alphaHub: 'GAMMA HUB',
    quest: 789,
    followers: 2345,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit.'
  },
 
];


const page = () => {
  return (
    <div>
      <div>
        <UserCard/>
        </div>
      

      <div>
        <EcoCate/>
      </div>
       <div>
       <div className="flex items-center gap-1 ml-16 mt-10">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="11"
          viewBox="0 0 16 11"
          fill="none"
        >
          <path
            d="M1 1H6.48652L15 10"
            stroke="#FA00FF"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M6 5L11 10" stroke="#FA00FF" stroke-linecap="round" />
        </svg>
        <div>
          <p>Communities</p>
        </div>
      </div>
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-6">
        {communityCardsData.map((data, index) => (
          <CommunityCard key={index} data={data} />
        ))}
      </div>
      </div>

      <div>
        <EducationCardList/>
      </div>

      <div>
        <GrantsCard/>
      </div>

      

    </div>
  )
}

export default page
