<template>

<ion-card>
        <ion-card-header>
          <ion-card-title class="page-title"
            >What do you want to see today?</ion-card-title
          >
        </ion-card-header>
        <ion-grid :fixed="true">
          <ion-row class=".ion-align-items-stretch">
            <ion-col size="6" size-lg="2">
              <router-link to="/calendar">
                <ion-card>
                  <img
                    src="/public/images/calendar-image.webp"
                    alt="Calendar"
                  />
                  <ion-card-header>
                    <ion-card-title>Your Sober Timeline</ion-card-title>
                  </ion-card-header>
                </ion-card>
              </router-link>
            </ion-col>
            <ion-col size="6" size-lg="2">
              <router-link to="/journal">
                <ion-card>
                  <img src="/public/images/journal-image.webp" alt="Journal" />
                  <ion-card-header>
                    <ion-card-title>Your Sober Journal</ion-card-title>
                  </ion-card-header>
                </ion-card>
              </router-link>
            </ion-col>
            <ion-col size="6" size-lg="2">
              <router-link to="/benefits">
                <ion-card>
                  <img
                    src="/public/images/benefits-image.jpeg"
                    alt="benefits"
                  />
                  <ion-card-header>
                    <ion-card-title>See your benefits</ion-card-title>
                  </ion-card-header>
                </ion-card>
              </router-link>
            </ion-col>
            <ion-col size="6" size-lg="2">
              <router-link to="/rewards">
                <ion-card>
                  <img
                    src="/public/images/rewards-image.jpg"
                    alt="benefits"
                  />
                  <ion-card-header>
                    <ion-card-title>See your rewards</ion-card-title>
                  </ion-card-header>
                </ion-card>
              </router-link>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>
</template>