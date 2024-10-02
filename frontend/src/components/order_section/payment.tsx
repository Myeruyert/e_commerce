import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const bankLogos = [
  {
    img: "https://s3-alpha-sig.figma.com/img/e8a0/3e7b/85b7a289464b0bfa7609218131e6b85e?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LPMjekSXW64raTyB5l6UySc3YAFIg8lCncQJzXlq2K~mg2Uzj8C6UBA5Oqqv1074rmg-tffBpqUuA0BE6u6nrLBtecLf3hfsFzizeYjeKU1wn9XlRpeWSM6IE7SOTkPo-9b81ZegLxxDHE9bOa6RVBUDDypjWLlYGQ-PRHnhxVghpkhBvo5N~Mi-uc-N-TFdkGWV2uvtRkM139JqSh~7zbagzELOuOTvNv842CwJMCAIzLGl2V-sb3T8x90sg48aU8NL1cByA3FPFIAQKugfv3I8cu0p8XF8P92xWyYssXShbKLd-AAXGsLzn0ikRiJh-BpWaWvMPTEPseH5aSKWPQ__",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/6ec2/130c/f4a5fbf42be75ec602339e27ae8897c3?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mdis7VpVeqmlu~2DMTd2643A3beaoNkQYHuCAsnGODJ0VLNGOWZglaCt-pCxpfQAe8ihLPS7gRR8wwh-6P9Puigy5eC2BAk3HYAV~BxIQ1xaR4EZgoSNJh~HqDwDuinelBYA-j-Y6csorfa0ngPjUIEoYVH83t~3hvR3aaeSq1ahVGEhSooWvO2jXj36WrbtOgcgGTPSAddJ6W4FJWmRoYpGzbALjA~pnbNJJp7e8~W~nidVDziMnbZp-GK-bk-0Rmet7csohg5awTInycx6Gf3u8P07a2gfzEZ6WIZ9wJ-7wN46IEu3Xa5yM5NsCce2oKilG73aHw~nc8V16NDe2w__",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/7b7f/24db/a28d07c4f41839b095e403709b5c582d?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TshS-VxvdX6uiJdkJIQJMTLKCQr-TNB7xlVmZaOr3OZ5UjRHvyHfv9PkEujuCIQgeZyg1rS3ZYMB9g~ysMBTKev9XIZsOOyc8uVQQhLX1g7ysqxWikFbyZ8fIRZaVVYlH3FsmvWw2oScMn2cbn0ray8Lf~~Hx4oyHtSds6i2xoHzT~PEHrZDAfgtqpYeszPQWTvy0GazD~vXrNB6lKSepPWvpIUXjJSQofsu6qUp5~-8FIXi7Tp6aRQSNsNgtuSYHP6j4zmHbIJHPWa0oO9vY1632xW~2UWp4XavmzkjimKMvsozxZRtjcj5E2QpRZKibLv58AiZ0zV2ec0gZ3hmhA__",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/d171/5f6a/adc9b2b09741c43a2ccc5295cd10261b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SujGDz7YfL20cuTQUoFIleQiiHBsKn42nKh0j0siEivOpIC9UkYQf~3yYGRK3Wn4MEI2p~apnD~zZS54Ifff6vKljMBT14qgqzFQe75vutKDSy6Us5Tv~A8s9v7UIQHbIONPB~J-P73T8lDzYLNmcUdPjjTOP-y3DN3QyIJaBfiOHeDentJuGrtfjTdP8xUX8UWvKWz77pkbRrdP29CQI8WmyrpTR8JmOLCKYkFe4ILbiuHvAc226LFcUPhI4KSsVsLtuiyUeulFO79pRjw1jczX35D4jhEBJWYmYfCGl6pAthhDahNbStDcOMuC9FqboAhYGsiIf92hRvxmy8iTxg__",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/fa9c/30f8/43107869ce9a2303bccb16f1415992ed?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h8XfUYA6NfpE-nY1DKcnfSTkrkSeRCbGbR3FTGUC3tiW--LURxZLKbGZNZjszSTC--klciXa0648zFuWwm44SNtJsdjT98-y033jwxOmA0HpoOK1a71ju~w6TQtUIIlPkomcIy6Nha0Zp93p~uqE6rzNQIKErzxxA5hq0fq5fJW2dqlXYYQHfCmvse9oYphJicdqrqA3AllRLuK6~Eda-uQxFVEhdFaKW-A6Y8lK1v0aCBmi~NthLZG5gVmBbe5FO7qHMfqNaqrjm-kcUKybKN3jiivkhakCNO9f3iWOcHqmMeAh-tCUHWEtCAGbJAhPjwKEOEn644y4NclFevTA5g__",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/a7d6/182d/5d9432f6a4543354822ade330a48927b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pZfr84PKCOFS6~kkaQXy50gfMV~ZqeDjSEWrax39xSBELjqaEHstqEDEVE8w3Nh8TDhG-~mUm906L77XSPYv~Cz2TDNp8VDRMJhD~u3wUs7tNf7piUR93twueuyM~kj83YLzQCpFW-6SpFL13qkr5VicfJkdhx2akoqZitJ-Pj51A3225Wvs2LgwqGvMk-AiK4syqymOfIEaBLpzjRDB8eXeyb4h4dW3Y8MiyHtqcdbSohWTsM6KhF3bqwO2vl1wVM4qyJcMK2NZSEgTAoB0ftNdRcKC~qykx2hH9C2~w7x~GtEJYsYy~6X~mNcdONcT4x~liEK190sBBpGJMK2AUQ__",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/fbc9/578c/ac53743143356ccceaa569e29bb02c54?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G9s2ASrLPxKlbaStc1KxYn1zP6MVqcsuuMvQ2~bmPvb4yO0BCNTI5Ny-XNde3dur4IBuPciIzM4poh0iIal77bSt7GBU7BkeHjekn8S-Txd3~9jg9Nhnr7MiC9W2j9JGTMMVOUpbfUo8MAwjtuPs0Z1QKxHzZVAUBhLTGhvG5YUtbZTCCwolh7k49~iYaO567SLvnPau4AI~KjW6FSpJVQLgoifAqEhci1A0tJw2g57Jyc1Z~PT7ab6FjNlDjKLw~4TFlYmPIyYYcM2xGEC5OOO8w8LlgGYzjeVcIzg5jZP5w4ZONhZTipzNJ8PGkvhp6Dj8h65hhWxLizQyXmGoJg__",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/1a81/68ba/2cfcbafc3f1b4f94b42519eb20f31870?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MNsalAtOtsN46PK3pRF6arHfkUDrwXJ87dcfHJFLsGXSeQmiTpsiEZx2k~AL3yvtPhaRTpIt43GVGGoreMgX1e1QqXUbwhDaUksRbI2hbxHpbVi-Gf5Dw4f5mpsU5~ZPDXqhHQmIKRe-M0t~hrzi7S~oKNLEPy8-Lrv1F2Yw-yosIjoX0Jw2nQM4z1CrGzHyWFHaVVtDpgpgySkr4D7R~dFMAKl9aVR3EOyjOtOSJHHPHso4UgNyOQbpbCYDPM-XjUv~BCCL8rqPqfvHDKItHWskNgf6pErb7JxGt7QBpNKtY-AAM8RUny-4WsiJEJ0wbjZMI7xV9rTNuQldFgv-gw__",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/d941/565f/7c43bd70e4fc55039b0d144fab9b9f64?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KdV-nUda5XhUeIJrNjEVSdctnDJI73hStYRoSpAYfzuLA4s4Ge11pvdH5SQeVEhWAbzGm7GfhcYNsqTxSDrZevHISZRkvzPQDU-rHE5CvMwzJ6r8EJkIzWhR-U394dj5KT9ouWKDJoaudoLuEmHR8GycKPRDswqg-pvAm6kNog08NdxZetG2cVOV9pkyZ2t1yb4DMWuN1WEN4NDYDsrdw2M6Xwue3xxZp5yU~wGyZplyABzlO2EixnIHS-FLy2TyRgCy-q7NEamQzDI6nquscPqdVzBDe6zLkREA6XcmgzxzOOygYKw36KFdZ3ZYpueK28JpOUhETihLBIlTVeVC7g__",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/6e81/74bf/66576d757c0daec27d4cc225e6935178?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eK7Jbd~ekB4oRjmXVNyGX4rFoEgDxYB6GuLG9-XzgFgYDPN2W7o6h4FIoUFPp21BV~XRQSbAyVHSJ8lXjlKn~DBk6dN~EDtMsgCjy~i9q2oTZvgixjJlLET3SNJ9q7aR~3Sh9uvWtRJ13LfeGohtriO4rYB0kN2jSGbqk2pi3qqrcz3c6Yl8gg6eW7EwI05KqVwIlIP49Zh3UrSxbQZwWosP426c2~34qzkXxzQHJ4uwlKRnMTwjI18NYZG95TPPRcabp5RcBGkN~xgDkq1BhhCG8Ts62e6tDiCgqNczv40bXCbkATs0SxGqmawZ6Ug8zeuRpUTi7nDoHGcWV5-d8g__",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/4a2c/29c3/6a8ad99b344fa9c5298301bf11c4e917?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MEfmuNFuuLltkPNVB-IIQmX1OBMIsBkpoYMBB4Zy-xJK5b3dQgdrSpwOqKdUceBK3ybAmbkFhBdjPm-tJc15yo-qQYNAuIX0dn4pmboVAN63MMvspYhQKekokLA4VQlqOjNMeZaCEwbMrZViQ2DsIfh87lMieRQZ8bJHXFxoW1UBSuR7jXhvIaR9lj9bJLEft9gaPC5V1CZKylq9tKxBnXfyFSXNYptzeWjsujY2CEVOW1Cn8vtGpz76ng-NEAhn95VivQzijmFeyo7kv~yEqt8QjNGQCgNDJJERf7AKKqLk1DbNhAy~DMYhEV6dJ~Ljcjar-BG5NvEs-LUxez0gMA__",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/418a/c21d/f890ebd210496775dbcfaa16404e2d16?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PUDo7kHMUI4tu4~dlcP4E0JmO54Ly0PpxZiQDLaXvCYiA0NciUWsXqaPc2UGVdnjVFyNmRengJ5XcxXgRM1-LiGQkwUlCkB42ExLpeshPdxSTsc224yY6ZA-JWNON3ODhxFJH~DXiT~t~OQySF4WqIUO~djsEE9bdTtTcFt7SelhYM4eLEVd9xBU~u7SeY92OdeXCM4fSmL5DVeiQeVbB0DPHxtQTRYYEePA3ml1fE6pnHz5w71KTnjeGctKTCJc7-VKfxfVod1-3J8w4aegD8XpyYMOutD70SJK6wf0owD7pwhv3-xqvQY6~UTrfs6ytj1vkP7COd0gnuqkGye6BQ__",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/428d/a1d7/dd1126460828f9288d6af266b45e34f2?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UArUF3F5s2h6vqLQR1Pcfp-aNelk0NgQy~Ru7IljACzWf2lNPH7cCkeHrLuer1vSaSK1R-S6WO5tX~3eSYSEzCdoFOj7R0LJ-n7if11omugqxzddtSBDGcV6H52PNf2Xa9qfEoxh0PThHLYxyr663bBfqki89T6UWkrEYnzErd5k4es5pzx2kXmKUw5IqKSqDCZkUHhUHypP18tRb7cGYoFC0e2-GStDDw08SgNLY~gonGsTEK2v6w9C5Z58LpfB6sDmTVPSPNFAj5y9s1ClkOdxL68Xx805LwxIbcTFFVgAhvzBlAuluLsYEaJ8jlIfI3Zr5ZSdor3gElfacwFMNg__",
  },
];

export const Payment = () => {
  return (
    <div>
      <Card className="flex flex-col p-8 border-none rounded-2xl w-1/3 m-auto">
        <h1 className="text-lg font-semibold mb-12">3. Төлбөр төлөлт</h1>
        <div className="self-center">
          <Badge className="w-20 text-center m-auto text-base font-normal bg-gray-100 text-black">
            14:59
          </Badge>
          <img src="/images/Rectangle 12034.png" alt="" className="my-5" />
          <p className="mt-8 mb-5">Төлөх боломжтой банкууд:</p>
        </div>
        <div className="flex gap-6 flex-wrap p-1">
          {bankLogos?.map((data) => (
            <img src={data.img} alt="" className="w-12 rounded-sm" />
          ))}
        </div>
        <Button
          className=" bg-transparent text-black border self-start mt-14"
          size="custom">
          Буцах
        </Button>
      </Card>
    </div>
  );
};
