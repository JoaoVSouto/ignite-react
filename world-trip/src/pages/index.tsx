import Head from 'next/head';
import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Img,
  ListItem,
  Text,
  UnorderedList,
  useToken,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import Airplane from 'components/Airplane';
import TravelType from 'components/TravelType';

import styles from 'styles/swiper.module.scss';

SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function Home() {
  const yellow400 = useToken('colors', 'yellow.400');

  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>

      <Flex justify="center" align="center" py={[4, 5, 7]}>
        <Img src="/img/logo.svg" alt="world trip" w={[20, 32, 48]} />
      </Flex>

      <Box
        bgImage="/img/banner-bg.jpg"
        bgRepeat="no-repeat"
        bgSize="cover"
        backgroundPosition="center -23vw"
        px={[4, 6, 8]}
        py={[7, 8, 20]}
      >
        <Flex position="relative" maxW="1240px" mx="auto">
          <Box>
            <Heading
              color="gray.50"
              fontWeight="medium"
              fontSize={['xl', '2xl', '4xl']}
              lineHeight={[7, 8, 'base']}
            >
              5 Continentes, <br />
              infinitas possibilidades.
            </Heading>
            <Text
              color="gray.200"
              fontSize={['sm', 'md', 'larger']}
              mt={[2, 3, 5]}
              lineHeight={[5, 6, 7]}
              maxW="524px"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>

          <Airplane />
        </Flex>
      </Box>

      <Box px={[4, 6, 8]}>
        <Flex
          as={UnorderedList}
          flexWrap="wrap"
          justify={{ base: 'center', lg: 'space-between' }}
          listStyleType="none"
          css={{ gap: '1.75rem' }}
          maxW="1240px"
          mx="auto"
          mt={{ base: 9, lg: 28 }}
          mb={{ base: 9, lg: 20 }}
        >
          <TravelType
            label="vida noturna"
            img={{ src: '/img/cocktail.svg', alt: 'Coquetel' }}
          />
          <TravelType
            label="praia"
            img={{ src: '/img/surf.svg', alt: 'Surf' }}
          />
          <TravelType
            label="moderno"
            img={{ src: '/img/building.svg', alt: 'Prédio' }}
          />
          <TravelType
            label="clássico"
            img={{ src: '/img/museum.svg', alt: 'Museu' }}
          />
          <TravelType
            label="e mais..."
            img={{ src: '/img/earth.svg', alt: 'Planeta Terra' }}
          />
        </Flex>
      </Box>

      <Divider borderColor="gray.600" opacity="1" w="60px" mx="auto" />

      <Text mt={6} fontSize="xl" fontWeight="medium" align="center">
        Vamos nessa?
        <br /> Então escolha seu continente
      </Text>

      {/* <Box
        as={Swiper}
        className={styles.swiperContainer}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        height={64}
        mt={5}
        mb={6}
        css={{
          '--swiper-navigation-color': yellow400,
          '--swiper-pagination-color': yellow400,
        }}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src="/img/na-banner.jpg"
            alt="Fotografia da estátua da liberdade"
            objectFit="cover"
            h="100%"
            w="100%"
            position="absolute"
            css={{ filter: 'brightness(0.3)' }}
            zIndex="-1"
          />
          <Text
            as="strong"
            color="gray.50"
            fontWeight="bold"
            fontSize="2xl"
            mt={12}
          >
            América do Norte
          </Text>
          <Text color="gray.200" fontWeight="bold" fontSize="sm" mt={9}>
            O segundo maior continente.
          </Text>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src="/img/sa-banner.jpg"
            alt="Fotografia aérea da praia de Copacabana"
            objectFit="cover"
            h="100%"
            w="100%"
            position="absolute"
            css={{ filter: 'brightness(0.3)' }}
            zIndex="-1"
          />
          <Text
            as="strong"
            color="gray.50"
            fontWeight="bold"
            fontSize="2xl"
            mt={12}
          >
            América do Sul
          </Text>
          <Text color="gray.200" fontWeight="bold" fontSize="sm" mt={9}>
            O continente mais tropical.
          </Text>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src="/img/asia-banner.jpg"
            alt="Fotografia de uma torre tailandesa vermelha e marrom"
            objectFit="cover"
            h="100%"
            w="100%"
            position="absolute"
            css={{ filter: 'brightness(0.3)' }}
            zIndex="-1"
          />
          <Text
            as="strong"
            color="gray.50"
            fontWeight="bold"
            fontSize="2xl"
            mt={12}
          >
            Ásia
          </Text>
          <Text color="gray.200" fontWeight="bold" fontSize="sm" mt={9}>
            O continente mais diverso.
          </Text>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src="/img/africa-banner.jpg"
            alt="Fotografia de uma árvore entre terras verdes durante o alvorecer"
            objectFit="cover"
            h="100%"
            w="100%"
            position="absolute"
            css={{ filter: 'brightness(0.3)' }}
            zIndex="-1"
          />
          <Text
            as="strong"
            color="gray.50"
            fontWeight="bold"
            fontSize="2xl"
            mt={12}
          >
            África
          </Text>
          <Text color="gray.200" fontWeight="bold" fontSize="sm" mt={9}>
            O continente mãe.
          </Text>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src="/img/europe-banner.jpg"
            alt="Fotografia aérea de uma iluminada ponte de concreto"
            objectFit="cover"
            h="100%"
            w="100%"
            position="absolute"
            css={{ filter: 'brightness(0.3)' }}
            zIndex="-1"
          />
          <Text
            as="strong"
            color="gray.50"
            fontWeight="bold"
            fontSize="2xl"
            mt={12}
          >
            Europa
          </Text>
          <Text color="gray.200" fontWeight="bold" fontSize="sm" mt={9}>
            O continente mais antigo.
          </Text>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src="/img/oceania-banner.jpg"
            alt="Fotografia da casa de ópera de Sydney"
            objectFit="cover"
            h="100%"
            w="100%"
            position="absolute"
            css={{ filter: 'brightness(0.3)' }}
            zIndex="-1"
          />
          <Text
            as="strong"
            color="gray.50"
            fontWeight="bold"
            fontSize="2xl"
            mt={12}
          >
            Oceania
          </Text>
          <Text color="gray.200" fontWeight="bold" fontSize="sm" mt={9}>
            O continente mais novo.
          </Text>
        </SwiperSlide>
      </Box> */}
    </>
  );
}
