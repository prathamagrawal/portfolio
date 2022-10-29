#20BDS0142 - PRATHAM AGRAWAL
# Using the Boston Housing Data
data(BostonHousing)
dim(BostonHousing)
head(BostonHousing)

# Splitting the dataset in 70% - Train and 30% Test
# Setting the randomizer's seed
set.seed(123)
samplecar <- sample(c(TRUE, FALSE), nrow(cars), replace=T, prob=c(0.7, 0.3))
#Split your data into training (60%) and test (40%) sets
train <- BostonHousing[samplecar, ]
test <- BostonHousing[!samplecar, ]
#verifying the shape of the new datasets
dim(BostonHousing)
dim(train)
dim(test)

#Making a regression model
lmmodel=lm(medv~crim+zn+indus+chas+nox+rm+age+dis+rad+tax+ptratio+b+lstat,data=BostonHousing)
summary(lmmodel)

#Predicting the new values using the test dataset
pred <- predict.lm(lmmodel, newdata=test)
head(pred)

#verifying the shape
length(pred)
dim(test)

#Results
par(mfrow=c(2,2))
plot(lmmodel)
par(mfrow=c(1,1))


data(Soybean)
dim(Soybean)
levels(Soybean$Class)
head(Soybean)
