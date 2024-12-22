'use client';

import { Sheet, Button, Card, Stack, Input } from "@mui/joy";
import { useRouter } from "next/navigation";  
import Image from 'next/image';

const MUITestPage = () => {
  const router = useRouter();
  return (
    <Sheet sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* 1. 검색 영역 */}
      <Card sx={{ p: 1 }}>  
        <Input 
          size="sm" 
          startDecorator={
            <Button size="sm"  color="primary">긴급</Button>
          }
          endDecorator={
            <>
              <Button sx={{ mr: 1 }} size="sm" color="primary">검색</Button>
              <Button size="sm" color="primary">알림</Button>
            </>
          }
        />
      </Card>

      {/* 2. 컨텐츠 영역 */}
      <Sheet sx={{ display: 'flex', gap: 2 }}>
        <Card sx={{ flex: 1, p: 2, height: 200, position: 'relative' }}>
          <Image 
            src="https://cdn.renault.co.kr/ko/resource/img/upload/asset/koleos/main_off.png"
            alt="Renault Koleos"
            fill
            style={{
              objectFit: 'contain'
            }}
          />
        </Card>
        <Card sx={{ width: 200, p: 2 }}>컨텐츠</Card>
      </Sheet>

      {/* 3. 차량 정보 버튼 영역 */}
      <Stack spacing={1}>
        <Stack direction="row" justifyContent="space-between" spacing={1}>
          <Button variant="outlined" sx={{ flex: 1 }}>차회사명</Button>
          <Button variant="outlined" sx={{ flex: 1 }}>차종명</Button>
          <Button variant="outlined" sx={{ flex: 1 }}>차추가변경</Button>
        </Stack>
        <Stack direction="row" justifyContent="space-between" spacing={1}>
          <Button variant="outlined" sx={{ flex: 1 }}>내차고</Button>
          <Button variant="outlined" sx={{ flex: 1, display: 'none' }}></Button>
          <Button variant="outlined" sx={{ flex: 1 }}>차프로필</Button>
        </Stack>
      </Stack>

      {/* 4. 내 차 부품 영역 */}
      <Card sx={{ p: 2, minHeight: 200, position: 'relative' }}>
        <Sheet>내 차 부품(미리보기)</Sheet>
        <Button 
          variant="outlined" 
          size="sm" 
          sx={{ 
            position: 'absolute',
            bottom: 8,
            left: 8
          }}
        >
          내차 부품
        </Button>
      </Card>

      {/* 5. 정비 후기 영역 */}
      <Sheet sx={{ display: 'flex', gap: 1 }}>
        <Card sx={{ flex: 1, p: 2 }}>정비 후기</Card>
        <Button size="lg">채팅</Button>
      </Sheet>

      {/* 6. 하단 네비게이션 */}
      <Card sx={{ p: 1 }}>
        <Stack direction="row" justifyContent="space-between">
          <Button 
            size="lg"
            sx={{ minWidth: '80px', width: '20%' }}
            onClick={() => router.push('/')}
          >
            홈
          </Button>
          <Button 
            size="lg"
            sx={{ minWidth: '80px', width: '20%' }}
          >
            정비소
          </Button>
          <Button 
            size="lg"
            sx={{ minWidth: '80px', width: '20%' }}
          >
            위치
          </Button>
          <Button 
            size="lg"
            sx={{ minWidth: '80px', width: '20%' }}
          >
            차고
          </Button>
        </Stack>
      </Card>
    </Sheet>
  );
};

export default MUITestPage;