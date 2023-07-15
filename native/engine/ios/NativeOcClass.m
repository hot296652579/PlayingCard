//
//  NativeOcClass.m
//  PlayingCard-mobile
//
//  Created by super_javan on 2023/3/22.
//

#import <Foundation/Foundation.h>

@interface NativeOcClass : NSObject

+(BOOL)callNativeUIWithTitle:(NSString *) title andContent:(NSString *)content{
  UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:title message:content delegate:self cancelButtonTitle:@"Cancel" otherButtonTitles:@"OK", nil];
  [alertView show];
  return true;
}

@end

