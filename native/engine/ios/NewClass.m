//
//  NewClass.m
//  PlayingCard-mobile
//
//  Created by super_javan on 2023/3/22.
//

#import "NewClass.h"

@implementation NewClass
+(NSString*) helloWorld{
    NSLog(@"call hello world func!!!");
};

+ (int) Add:(int) num1 Another:(NSString*) str{
    NSLog(@"调用了oc方法");
    return 33;
}

@end
